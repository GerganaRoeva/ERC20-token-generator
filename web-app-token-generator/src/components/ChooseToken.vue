<template>
  <div class="conteiner">
    <div class="buttons-conteiner">
      <div class="token-info">
        <div class="text-box">
          <p class="title">BasicERC-20</p>
          <p>&#9989; ERC-20</p>
          <p>&#9989; Custom: decimals, supply</p>
          <p>&#128679; Acsses type: none</p>
          <p>&#10060; Mint&Burn tokens (capped supply)</p>
          <p>&#10060; Pausable</p>
        </div>
        <button @click="sentType('BasicERC-20')">Price: 0.03 ETH</button>
      </div>
      <div class="token-info">
        <div class="text-box">
          <p class="title">PausableERC-20</p>
          <p>&#9989; ERC-20</p>
          <p>&#9989; Custom: decimals, supply</p>
          <p>&#128679; Acsses type: ownable</p>
          <p>&#10060; Mint&Burn tokens (capped supply)</p>
          <p>&#9989; Pausable</p>
        </div>
        <button @click="sentType('PausableERC-20')">Price: 0.06 ETH</button>
      </div>
      <div class="token-info">
        <div class="text-box">
          <p class="title">SpectacularERC-20</p>
          <p>&#9989; ERC-20</p>
          <p>&#9989; Custom: decimals, supply</p>
          <p>&#128679;Acsses type: ownable</p>
          <p>&#9989; Mint&Burn tokens (capped supply)</p>
          <p>&#10060; Pausable</p>
        </div>
        <button @click="sentType('SpectacularERC-20')">Price: 0.09 ETH</button>
      </div>
      <div class="token-info">
        <div class="text-box">
          <p class="title">LuxuriousERC-20</p>
          <p>&#9989; ERC-20</p>
          <p>&#9989; Custom: decimals, supply</p>
          <p>&#128679; Acsses type: roles</p>
          <p>&#9989; Mint&Burn tokens (capped supply)</p>
          <p>&#9989; Pausable</p>
        </div>
        <button @click="sentType('LuxuriousERC-20')">Price: 0.12 ETH</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tokenType: "",
    };
  },
  methods: {
    sentType(tokenType) {
      this.tokenType = tokenType;
      this.$emit("token", this.tokenType);
    },
  },
};
</script>

<style scoped>
.conteiner{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 10px;
}
.title {
  text-align: center;
  font-weight: bold;
  font-size: 18px;
}
.token-info {
  text-align: left;
  padding: 10px;
}
.text-box {
  background-color: #d3faff;
  padding: 15px;
  border-radius: 12px;
}
.conteiner {
  text-align: center;
  flex-direction: column;
}
button {
  background-color: #51ddf0;
  border: none;
  color: white;
  width: 100%;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  font-size: 16px;
  border-radius: 12px;
  display: inline-block;
  font-weight: bold;
}
button:hover {
  background-color: #51cbf0;
  color: white;
}
.buttons-conteiner {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  flex-direction: row;
  row-gap: 15px;
}
</style>
