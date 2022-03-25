<template>
    <div class="conteiner">
        <h2>Creating token</h2>

        <div class="buttons-conteiner">
          <div class="token-info">
            <div class="text-box">
              <p class="title">Characteristics:</p>
              <p> &#9989; ERC-20</p>
              <p> &#9989; Custom: decimals, supply</p>
              <p> &#128679;	Acsses type: none</p>
              <p> &#10060; Mint&Burn tokens (capped supply)</p>
              <p> &#10060; Pausable</p>
            </div>
            <button @click="flagSupply ='fixed'">BasicERC-20</button>

          </div>
          <div class="token-info">
            <div class="text-box">
              <p class="title">Characteristics:</p>
              <p> &#9989; ERC-20</p>
              <p> &#9989; Custom: decimals, supply</p>
              <p> &#128679; Acsses type: ownable</p>
              <p> &#10060; Mint&Burn tokens (capped supply)</p>
              <p> &#9989; Pausable</p>
            </div>
            <button @click="flagSupply ='fixed'">PausableERC-20</button>

          </div>
          <div class="token-info">
            <div class="text-box">
              <p class="title">Characteristics:</p>
              <p> &#9989; ERC-20</p>
              <p> &#9989; Custom: decimals, supply</p>
              <p> &#128679;Acsses type: ownable</p>
              <p> &#9989; Mint&Burn tokens (capped supply)</p>
              <p> &#10060; Pausable</p>
            </div>
            <button @click="flagSupply ='cap'">SpectacularERC-20</button>

          </div>
          <div class="token-info">
            <div class="text-box">
              <p class="title">Characteristics:</p>
              <p> &#9989; ERC-20</p>
              <p> &#9989; Custom: decimals, supply</p>
              <p> &#128679; Acsses type: roles</p>
              <p> &#9989; Mint&Burn tokens (capped supply)</p>
              <p> &#9989; Pausable</p>
            </div>
           <button @click="flagSupply ='cap'">LuxuriousERC-20</button>

          </div>

        </div>
     </div>

</template>

<script>



</script>

<style scoped>
.title{
  text-align: center;
  font-weight: bold;
}
.token-info{
  text-align: left;

}
.text-box{
  background-color: #d3faff;
  padding: 15px;
  border-radius: 12px;

}
.conteiner{
  text-align: center;
  flex-direction: column;
}
button{
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
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  display: flex;
  flex-direction: row;
  row-gap: 15px;
}
</style>
