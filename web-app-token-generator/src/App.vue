<template>
  <div>
    <!-- <Nav /> -->

    <div class="flex-container">
      <button class="home">
        <router-link to="/"> ERC-20 TOKEN GENERATOR</router-link>
      </button>
      <button class="dict">
        <router-link to="/dictionary"> Dictionary</router-link>
      </button>
    </div>

    <router-view />
    
  </div>
</template>

<script>
// import Nav from "./components/Nav.vue";

export default {
  name: "App",
  components: {
    // Nav,

  },
};
</script>

<style>
html,
body {
  margin: 0;
}
</style>

<style scoped>
.flex-container {
  background-color: rgb(152, 250, 245);
  margin: 0;
  padding: 0;
  height: 85px;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-around;
}
button.home {
  font-size: 20px;
  background-color: transparent;
  background-repeat: no-repeat;
  border: none;
  overflow: hidden;
  outline: none;
}

button.dict {
  border: none;
  background-color: transparent;
  float: right;
  /* padding-right: 300px; */
  overflow: hidden;
  outline: none;
}

a {
  text-decoration: none;
  color: rgb(0, 0, 0);
}
</style>
