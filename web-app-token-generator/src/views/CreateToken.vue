<template>
  <div class="container">
    <InstallMetaMask/>
    <h2>Creating token</h2>

    <div class="choosing-token">
      <button @click="flagSupply ='fixed'">basic</button>
      <button @click="flagSupply ='fixed'">pausable</button>
      <button @click="flagSupply ='cap'">spectacular</button>
      <button @click="flagSupply ='cap'">luxurious</button>
    </div>

    <form @submit.prevent="submitForm">
      <div v-show="flagSupply !== ''" class="token-details">
        <div class="inputs">
          <label for="token-name">Name</label>
          <input
            id="token-name"
            name="token-name"
            type="text"
            v-model.trim="tokenName"
            @blur="validateName"
          />
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
        </div>
        <div v-show="flagSupply === 'cap'" class="inputs">
          <label for="cap">Cap supply</label>
          <input
            id="cap"
            name="cap"
            type="number"
            min="0"
            v-model="tokenCapSupply"
            @blur="validateCap"
          />
        </div>
        <p v-show="nameValidity === 'invalid'">Invalid name</p>
        <p v-show="symbolValidity === 'invalid'">Invalid symbol</p>
        <p v-show="decimalsValidity === 'invalid'">
          Decimals shoud be greater then 0
        </p>
        <p v-show="supplyValidity === 'invalid'">
          Supply shoud be greater then 0
        </p>
        <p v-show="capValidity === 'invalid'">
          Cap shoud be greater or equal to supply
        </p>
        <button @click="anyInvalidImput">submit</button>
      </div>
    </form>
  </div>
</template>

<script>
import InstallMetaMask from "../components/InstallMetaMask.vue";

import { abiBasic, bytecodeBasic } from "../contractsInstances/instanceBasicERC20.js"
// import { abiPausable, bytecodePausable } from "../contractsInstances/instancePausabelERC20.js"

const Web3 = require("web3");



export default {
    components: {
      InstallMetaMask,
    },
  data() {
    return {
      flagSupply: "",
      tokenName: "NAME-TEST",
      tokenSymbol: "N-T",
      tokenDecimals: 3,
      tokenSupply: 3,
      tokenCapSupply: 0,
      supplyValidity: "pending",
      capValidity: "pending",
      nameValidity: "pending",
      symbolValidity: "pending",
      decimalsValidity: "pending",
      canSubmit: "yes",
    };
  },
  methods: {
      async submitForm() {
          const web3 = new Web3(window.ethereum);
          const accounts = await web3.eth.getAccounts();

          const instanceBasicERC20 = await new web3.eth.Contract(abiBasic);

          web3.eth.Contract.defaultAccount = await accounts[0];

          await instanceBasicERC20.deploy({
                data: bytecodeBasic,
               arguments: [this.tokenName, this.tokenSymbol, this.tokenDecimals, this.tokenSupply ]
           }).send({
            from: accounts[0]
         });
    },
    validateSupply() {
      if (this.tokenSupply > 0) {
        this.supplyValidity = "valid";
      } else this.supplyValidity = "invalid";
    },

    validateDecimals() {
      if (this.tokenDecimals > 0) {
        this.decimalsValidity = "valid";
      } else this.decimalsValidity = "invalid";
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

    validateCap() {
      if (this.tokenCapSupply >= this.tokenSupply) {
        this.capValidity = "valid";
      } else this.capValidity = "invalid";
    },
    anyInvalidImput() {
      if (
        this.tokenCapSupply < this.tokenSupply ||
        this.tokenSymbol != "" ||
        this.tokenName != "" ||
        this.tokenDecimals <= 0 ||
        this.tokenSupply <= 0
      )
        this.canSubmit = "no";
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
}
.choosing-token {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: baseline;
}
select {
  height: 18px;
  margin: 4px;
}
.token-details {
  display: flex;
  flex-direction: row;
  height: 18px;
  align-items: baseline;
  margin: 10px;
  justify-content: space-evenly;
  flex-wrap: wrap;
}
.inputs {
  display: flex;
  flex-direction: column;
}
h2 {
  text-align: center;
}

.create-button {
  background-color: aquamarine;
  padding: 14px 25px;
  text-align: center;
  display: inline-block;
  border-radius: 12px;
}
.create-button:hover {
  box-shadow: 0px 15px 20px rgba(106, 255, 196, 0.507);
}
a {
  text-decoration: none;
  color: white;
}
</style>
