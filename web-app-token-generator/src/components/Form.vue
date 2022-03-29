<template>
  <div v-show="isChoosen === 'true'" class="container">
    <div class="from">
      <h2>You are creating {{ typeOfToken }}</h2>
      <form class="form">
        <div class="token-input">
          <div class="inputs">
            <label for="token-name">Name: </label>
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
            <label for="token-Symbol">Symbol: </label>
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
            <label for="decimals">Decimals: </label>
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
            <label for="supply">Supply: </label>
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
            <label for="cap">Cap supply: </label>
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
      <div class="center-button">
        <button @click="confirm">Confirm</button>
      </div>
    </div>
    <section>
      <img src="../assets/working-with-laptop.svg" width="600" height="400" />
    </section>
  </div>
</template>

<style scoped>
img {
  padding: 15px;
}
.center-button {
  display: flex;
  justify-content: center;
}
.token-input {
  display: flex;
  flex-direction: column;
  justify-content: wrap;
}
.inputs {
  padding: 5px;
}
.container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
}
button {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #51ddf0;
  border: none;
  color: white;
  padding: 15px 22px;
  text-align: center;
  text-decoration: none;
  font-size: 15px;
  border-radius: 12px;
  /* display: inline-block; */
  font-weight: bold;
  margin: 0;
}
button:hover {
  background-color: #51cbf0;
  color: white;
}
.error-text {
  color: red;
}
</style>

<script>
import BasicERC20 from "../../../tokens/build/contracts/BasicERC20.json";
import PausableERC20 from "../../../tokens/build/contracts/PausableERC20.json";
import SpectacularERC20 from "../../../tokens/build/contracts/SpectacularERC20.json";
import LuxuriousERC20 from "../../../tokens/build/contracts/LuxuriousERC20.json";

const Web3 = require("web3");

export default {
  data() {
    return {
      isChoosen: "",
      tokenName: "",
      tokenSymbol: "",
      tokenDecimals: 0,
      tokenSupply: 0,
      tokenCapSupply: 0,
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
        this.supplyValidity === "valid" &&
        this.decimalsValidity === "valid" &&
        this.symbolValidity === "valid" &&
        this.nameValidity === "valid"
      ) {
        var basicTrue = "true";
      }
      if (
        this.typeOfToken === "SpectacularERC-20" ||
        this.typeOfToken === "LuxuriousERC-20"
      ) {
        if (this.capValidity === "valid" && basicTrue === "true") {
          return true;
        }
      } else if (basicTrue === "true") {
        return true;
      }
      console.log("some invalid");
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
        this.sendETH(this.typeOfToken);
      }
    },
    async sendETH(typeOfToken) {
      const web3 = await new Web3(window.ethereum);
      await window.ethereum.request({ method: "eth_requestAccounts" });
      const accounts = await web3.eth.getAccounts();
      var amount = "";
      switch (typeOfToken) {
        case "BasicERC-20":
          amount = "0.03";
          break;
        case "PausableERC-20":
          amount = "0.06";
          break;
        case "SpectacularERC-20":
          amount = "0.09";
          break;
        case "LuxuriousERC-20":
          amount = "0.12";
          break;
      }

      const addresRecever = "0xF3802D0C942aEc9884a7Fd8368CB4503126451F8";
      const transactionParameters = {
        to: addresRecever,
        from: accounts[0],
        value:
          "0x" +
          web3.utils.toBN(web3.utils.toWei(amount, "ether")).toString(16),
      };

      await window.ethereum
        .request({
          method: "eth_sendTransaction",
          params: [transactionParameters],
        })
        .then(() => {
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
        });
    },
    async deployBasic(accounts, web3) {
      const instanceBasicERC20 = await new web3.eth.Contract(BasicERC20.abi, {
        data: BasicERC20.bytecode,
      });

      instanceBasicERC20.options.address = await accounts[0];

      await instanceBasicERC20
        .deploy({
          arguments: [
            this.tokenName,
            this.tokenSymbol,
            (this.tokenSupply * 10 ** this.tokenDecimals).toLocaleString(
              "fullwide",
              { useGrouping: false }
            ),
            this.tokenDecimals,
          ],
        })
        .send({
          from: accounts[0],
        });
    },
    async deployPausable(accounts, web3) {
      const instancePausableERC20 = await new web3.eth.Contract(
        PausableERC20.abi,
        {
          data: PausableERC20.bytecode,
        }
      );

      instancePausableERC20.options.address = await accounts[0];

      await instancePausableERC20
        .deploy({
          data: PausableERC20.bytecode,
          arguments: [
            this.tokenName,
            this.tokenSymbol,
            (this.tokenSupply * 10 ** this.tokenDecimals).toLocaleString(
              "fullwide",
              { useGrouping: false }
            ),
            this.tokenDecimals,
          ],
        })
        .send({
          from: accounts[0],
        });
    },
    async deploySpectacular(accounts, web3) {
      const instanceSpectacularERC20 = await new web3.eth.Contract(
        SpectacularERC20.abi,
        {
          data: SpectacularERC20.bytecode,
        }
      );
      instanceSpectacularERC20.options.address = await accounts[0];

      await instanceSpectacularERC20
        .deploy({
          arguments: [
            this.tokenName,
            this.tokenSymbol,
            (this.tokenCapSupply * 10 ** this.tokenDecimals).toLocaleString(
              "fullwide",
              { useGrouping: false }
            ),
            (this.tokenSupply * 10 ** this.tokenDecimals).toLocaleString(
              "fullwide",
              { useGrouping: false }
            ),
            this.tokenDecimals,
          ],
        })
        .send({
          from: accounts[0],
        });
    },
    async deployLuxurious(accounts, web3) {
      const instanceLuxuriousERC20 = await new web3.eth.Contract(
        LuxuriousERC20.abi,
        {
          data: LuxuriousERC20.bytecode,
        }
      );

      instanceLuxuriousERC20.options.address = await accounts[0];

      await instanceLuxuriousERC20
        .deploy({
          arguments: [
            this.tokenName,
            this.tokenSymbol,
            (this.tokenCapSupply * 10 ** this.tokenDecimals).toLocaleString(
              "fullwide",
              { useGrouping: false }
            ),
            (this.tokenSupply * 10 ** this.tokenDecimals).toLocaleString(
              "fullwide",
              { useGrouping: false }
            ),
            this.tokenDecimals,
          ],
        })
        .send({
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
