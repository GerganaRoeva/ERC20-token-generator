<template>
  <div v-show="isChoosen === 'true'">
    <h2>You are creating {{ typeOfToken }}</h2>
    <form>
      <div class="token-input">
        <div class="inputs">
          <label for="token-name">Name</label>
          <input
            id="token-name"
            name="token-name"
            type="text"
            v-model.trim="tokenName"
            @blur="validateName"
          />
          <p v-show="nameValidity === 'invalid'" class="error-text">
            Name filed is required
          </p>
        </div>
        <div class="inputs">
          <label for="token-Symbol">Symbol</label>
          <input
            id="token-Symbol"
            name="token-Symbol"
            type="text"
            v-model.trim="tokenSymbol"
            @blur="validateSymbol"
          />
          <p v-show="symbolValidity === 'invalid'" class="error-text">
            Symbol filed is required
          </p>
        </div>
        <div class="inputs">
          <label for="decimals">Decimals</label>
          <input
            id="decimals"
            name="decimals"
            type="number"
            min="0"
            v-model="tokenDecimals"
            @blur="validateDecimals"
          />
          <p v-show="decimalsValidity === 'invalid'" class="error-text">
            Decimals shoud be greater then 0 and less than 256
          </p>
        </div>
        <div class="inputs">
          <label for="supply">Supply</label>
          <input
            id="supply"
            name="supply"
            type="number"
            min="0"
            v-model="tokenSupply"
            @blur="validateSupply"
          />
          <p v-show="supplyValidity === 'invalid'" class="error-text">
            Supply shoud be greater then 0
          </p>
        </div>
        <div
          v-show="
            typeOfToken === 'LuxuriousERC-20' ||
            typeOfToken === 'SpectacularERC-20'
          "
          class="inputs"
        >
          <label for="cap">Cap supply</label>
          <input
            id="cap"
            name="cap"
            type="number"
            min="0"
            v-model="tokenCapSupply"
            @blur="validateCap"
          />
          <p v-show="capValidity === 'invalid'" class="error-text">
            Cap shoud be greater or equal to supply
          </p>
        </div>
      </div>
    </form>
    <button @click="confirm">Confirm</button>
  </div>
</template>

<script>
import BasicERC20 from "../../../tokens/build/contracts/BasicERC20.json";
import PausableERC20 from "../../../tokens/build/contracts/PausableERC20.json";
import SpectacularERC20 from '../../../tokens/build/contracts/SpectacularERC20.json';
import LuxuriousERC20 from '../../../tokens/build/contracts/LuxuriousERC20.json';

const Web3 = require("web3");

export default {
  data() {
    return {
      isChoosen: "",
      tokenName: "MyCustomToken",
      tokenSymbol: "MCT",
      tokenDecimals: 18,
      tokenSupply: 10000,
      tokenCapSupply: 11000,
      nameValidity: "",
      symbolValidity: "",
      decimalsValidity: "",
      supplyValidity: "",
      capValidity: "",
    };
  },
  props: {
    typeOfToken: String,
  },
  methods: {
    isTypeChoosen() {
      if (this.typeOfToken.length > 0) {
        this.isChoosen = "true";
      }
    },
    validateName() {
      if (this.tokenName === "") {
        this.nameValidity = "invalid";
      } else this.nameValidity = "valid";
    },
    validateSymbol() {
      if (this.tokenSymbol === "") {
        this.symbolValidity = "invalid";
      } else this.symbolValidity = "valid";
    },
    validateDecimals() {
      if (this.tokenDecimals < 0 || this.tokenDecimals > 255) {
        this.decimalsValidity = "invalid";
      } else this.decimalsValidity = "valid";
      console.log(this.decimalsValidity);
    },
    validateSupply() {
      if (this.tokenSupply > 0) {
        this.supplyValidity = "valid";
      } else this.supplyValidity = "invalid";
    },
    validateCap() {
      if (this.tokenCapSupply >= this.tokenSupply) {
        this.capValidity = "valid";
      } else this.capValidity = "invalid";
    },
    allValid() {
      if (
        this.capValidity === "valid" &&
        this.supplyValidity === "valid" &&
        this.decimalsValidity === "valid" &&
        this.symbolValidity === "valid" &&
        this.nameValidity === "valid"
      )
        return true;
      return false;
    },
    confirm() {
      this.validateName();
      this.validateSymbol();
      this.validateDecimals();
      this.validateSupply();
      this.validateCap();
      var allValid = this.allValid();
      if (allValid) {
        this.submit(this.typeOfToken);
      }
    },
    async submit(typeOfToken) {
      const web3 = await new Web3(window.ethereum);
      await window.ethereum.request({ method: "eth_requestAccounts" });
      const accounts = await web3.eth.getAccounts();

      switch (typeOfToken) {
        case "BasicERC-20":
          this.deployBasic(accounts, web3);
          break;
        case "PausableERC-20":
          this.deployPausable(accounts, web3);
          break;
        case "SpectacularERC-20":
          this.deploySpectacular(accounts, web3);
          break;
        case "LuxuriousERC-20":
          this.deployLuxurious(accounts, web3);
          break;
      }
    },
    async deployBasic(accounts, web3) {
      const instanceBasicERC20 = await new web3.eth.Contract(BasicERC20.abi, {
        data: BasicERC20.bytecode,
      });
      console.log(typeof instanceBasicERC20);

      instanceBasicERC20.options.address = await accounts[0];

      web3.eth.Contract.defaultAccount = await accounts[0];

      await instanceBasicERC20
        .deploy({
          arguments: [
            this.tokenName,
            this.tokenSymbol,
            (this.tokenSupply * 10**this.tokenDecimals).toLocaleString('fullwide', {useGrouping:false}),
            // this.tokenSupply,

            this.tokenDecimals,
          ],
        })
        .send({
          from: accounts[0],
        });

        // await instanceBasicERC20.methods.transfer(accounts[0], this.tokenSupply).send({
        //   from: accounts[0],
        // })
    },
    async deployPausable(accounts, web3) {
      const instancePausableERC20 = await new web3.eth.Contract(
        PausableERC20.abi, {
        data: PausableERC20.bytecode,
      });

      instancePausableERC20.options.address = await accounts[0];

      web3.eth.Contract.defaultAccount = await accounts[0];

      await instancePausableERC20
        .deploy({
          data: PausableERC20.bytecode,
          arguments: [
            this.tokenName,
            this.tokenSymbol,
            (this.tokenSupply * 10**this.tokenDecimals).toLocaleString('fullwide', {useGrouping:false}),
            this.tokenDecimals,
          ],
        })
        .send({
          from: accounts[0],
        });
    },
    async deploySpectacular(accounts, web3) {
      const instanceSpectacularERC20 = await new web3.eth.Contract(
        SpectacularERC20.abi, {
        data: SpectacularERC20.bytecode,
      });
      instanceSpectacularERC20.options.address = await accounts[0];

      web3.eth.Contract.defaultAccount = await accounts[0];

      await instanceSpectacularERC20
        .deploy({
          data: SpectacularERC20.bytecode,
          arguments: [
            this.tokenName,
            this.tokenSymbol,
            this.tokenCapSupply * 10**this.tokenDecimals,
            (this.tokenSupply * 10**this.tokenDecimals).toLocaleString('fullwide', {useGrouping:false}),
            this.tokenDecimals
          ],
        })
        .send({
          from: accounts[0],
        });
    },
    async deployLuxurious(accounts, web3) {
        // const accounts = await web3.eth.getAccounts();

      const instanceLuxuriousERC20 = await new web3.eth.Contract(
        LuxuriousERC20.abi, {
        data: LuxuriousERC20.bytecode,
      });

      instanceLuxuriousERC20.options.address = await accounts[0];

      web3.eth.Contract.defaultAccount = await accounts[0];

      await instanceLuxuriousERC20
        .deploy({
          arguments: [
              this.tokenName,
              this.tokenSymbol,
              (this.tokenCapSupply * 10**this.tokenDecimals),
              (this.tokenSupply * 10**this.tokenDecimals).toLocaleString('fullwide', {useGrouping:false}),
              this.tokenDecimals
          ],
        })
        .send({
          from: accounts[0],
        });
        await instanceLuxuriousERC20.methods.transfer(accounts[0], this.tokenSupply).send({
          from: accounts[0],
        });
    },
  },
  watch: {
    typeOfToken: function () {
      this.isTypeChoosen();
    },
  },
};
</script>

<style scoped>
.error-text {
  color: red;
}
</style>
