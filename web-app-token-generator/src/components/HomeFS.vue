<template>
  <div class="flex-container">
    <section>
      <h2>Create you own token now</h2>
      <!-- Text for example -->
      <p>
        Create an ERC20 Token in less than a minute! No login. No setup. No
        coding required.
      </p>
      <div class="create-button">
        <router-link to="/create-token"> Create token</router-link>
      </div>
    </section>
    <section>
      <img src="../assets/LayingDoodle.svg" width="600" height="400" />
    </section>
  </div>
</template>

<style scoped>
.flex-container {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-around;
  padding: 10px;
  /* background-color: ; */
} 
img {
  padding: 15px;
}
.create-button {
  background-color: aquamarine;
  color: black;
  padding: 14px 25px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  border-radius: 12px;
}
.create-button:hover {
  background-color: rgb(130, 214, 186);
}
a {
  text-decoration: none;
  color: white;
}
</style>
