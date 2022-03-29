<template>
  <div class="flex-container">
    <section>
      <h2>Create you own token now</h2>
      <!-- Text for example -->
      <p>
        Create ERC20 token contract! No coding, only MetaMask!
      </p>
      <router-link to="/create-token">
        <div class="create-button">Create token</div>
      </router-link>
    </section>
    <section>
      <img
        src="../assets/Notifications_Monochromatic.svg"
        width="600"
        height="400"
      />
    </section>
  </div>
</template>

<style scoped>
.flex-container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 10px;
  align-items: center;
}
img {
  padding: 15px;
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
