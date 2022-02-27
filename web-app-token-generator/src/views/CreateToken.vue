<template>
  <div class="container">
    <h2>Creating token</h2>

    <div class="choosing-token">
      <p>Choose token type:</p>

      <select name="tokens" id="tokens">
        <option value="type1">type1</option>
        <option value="type2">type2</option>
        <option value="type3">type3</option>
        <option value="type4">type4</option>
      </select>
    </div>

    <div class="token-details">
      <div class="inputs">
        <label for="token-name">Name</label>
        <input id="token-name" name="token-name" type="text" />
      </div>
      <div class="inputs">
        <label for="token-Symbol">Symbol</label>
        <input id="token-Symbol" name="token-Symbol" type="text" />
      </div>
      <div class="form-control">
        <label for="decimals">Decimals</label>
        <input id="decimals" name="decimals" type="number" />
      </div>
      <div class="form-control">
        <label for="initial">Initial supply</label>
        <input id="initial" name="initial" type="number" />
      </div>
      <div class="form-control">
        <label for="total">Total supply</label>
        <input id="total" name="total" type="number" />
      </div>
    </div>
  </div>
</template>

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
  /* background-color: aquamarine;
  border-radius: 12px;
  border-color: transparent;
  color: aliceblue; */
}
.token-details {
  display: flex;
  flex-direction: row;
  height: 18px;
  align-items: baseline;
  margin: 10px;
  justify-content: space-evenly;
  /* border-color: black; */
  flex-wrap: wrap;
}
.inputs {
  display: flex;
  flex-direction: column;
}
h2 {
  text-align: center;
}
</style>
