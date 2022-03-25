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
      // allValid: "",
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
        this.submit();
      }
    },
    submit() {
      
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
