<template>
  <div class="container">
    <InstallMetaMask />
    <ChooseToken @token="getType" />
    <Form :typeOfToken="tokenType"/>
  </div>
</template>

<script>
import InstallMetaMask from "../components/InstallMetaMask.vue";
import ChooseToken from "../components/ChooseToken.vue";
import Form from "../components/Form.vue";


import {
  abiBasic,
  bytecodeBasic,
} from "../contractsInstances/instanceBasicERC20.js";
// import { abiPausable, bytecodePausable } from "../contractsInstances/instancePausabelERC20.js"

const Web3 = require("web3");

export default {
  components: {
    InstallMetaMask,
    ChooseToken,
    Form,
  },
  data() {
    return {
      tokenType: "",
    };
  },
  methods: {
    getType(type) {
      this.tokenType = type;
    },
    async submitForm() {
      const web3 = new Web3(window.ethereum);
      const accounts = await web3.eth.getAccounts();

      const instanceBasicERC20 = await new web3.eth.Contract(abiBasic);

      web3.eth.Contract.defaultAccount = await accounts[0];

      await instanceBasicERC20
        .deploy({
          data: bytecodeBasic,
          arguments: [
            this.tokenName,
            this.tokenSymbol,
            this.tokenDecimals,
            this.tokenSupply,
          ],
        })
        .send({
          from: accounts[0],
        });
    },
    
  },
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
}
select {
  height: 18px;
  margin: 4px;
}
.token-input {
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
