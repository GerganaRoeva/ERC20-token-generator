<template>
  <div class="flex-container">
    <button class="home">
      <router-link to="/"> ERC-20 TOKEN GENERATOR</router-link>
    </button>
  </div>
</template>

<style scoped>
.flex-container {
  background: linear-gradient(40deg, #435fdb, #43dbca);
  margin: 0;
  padding: 0;
  height: 85px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
}
button.home {
  font-size: 25px;
  background-color: transparent;
  background-repeat: no-repeat;
  border: none;
  overflow: hidden;
  outline: none;
}
button.dict {
  font-size: 20px;

  border: none;
  background-color: transparent;
  float: right;
  overflow: hidden;
  outline: none;
}
a {
  text-decoration: none;
  color: rgb(255, 255, 255);
}
</style>
