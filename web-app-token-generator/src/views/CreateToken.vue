<template>
  <div class="container">
    <InstallMetaMask />
    <ChooseToken @token="getType" />
    <Form :typeOfToken="tokenType" />
  </div>
</template>

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

<style scoped>
.container {
  display: flex;
  flex-direction: column;
}
select {
  height: 18px;
  margin: 4px;
}
.token-input {
  display: flex;
  flex-direction: row;
  height: 18px;
  align-items: baseline;
  margin: 10px;
  justify-content: space-evenly;
  flex-wrap: wrap;
}
.inputs {
  display: flex;
  flex-direction: column;
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
