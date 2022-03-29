<template>
  <div class="container">
    <InstallMetaMask />
    <h2>Creating token</h2>
    <section class="token-and-form">
      <ChooseToken @token="getType" />
      <Form :typeOfToken="tokenType" />
    </section>
  </div>
</template>

<style scoped>
h2 {
  text-align: center;
  font-size: 35px;
}
.container {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: flex-start;
}
.token-and-form {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: nowrap;
}
</style>

<script>
import InstallMetaMask from "../components/InstallMetaMask.vue";
import ChooseToken from "../components/ChooseToken.vue";
import Form from "../components/Form.vue";

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
  },
};
</script>
