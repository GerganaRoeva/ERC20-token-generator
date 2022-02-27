<template>
  <div class="flex-container">
    <section>
      <h2>Create you own token now</h2>
      <!-- Text for example -->
      <p>
        Create an ERC20 Token in less than a minute! No login. No setup. No
        coding required.
      </p>
      <router-link to="/create-token"> Create token</router-link>
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
}
img {
  padding: 15px;
}
</style>
