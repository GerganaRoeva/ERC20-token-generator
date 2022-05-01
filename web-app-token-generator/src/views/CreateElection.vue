<template>
  <span>
    <h1>Create new election now</h1>
    <section>
      <el-form style="max-width: 800px">
        <el-form-item label="Token Address">
          <el-input v-model="tokenAddress" placeholder="0x...." />
        </el-form-item>
        <el-form-item label="Subject of voting">
          <el-input v-model="topic" />
        </el-form-item>

        <el-form-item>
          <el-date-picker
            v-model="startEnd"
            type="datetimerange"
            range-separator="To"
            start-placeholder="Start date"
            end-placeholder="End date"
          />
        </el-form-item>
        <el-form-item style="justify-content: center">
          <el-button type="primary" @click="confirm">Create election</el-button>
        </el-form-item>
        <div v-show="transactionComplited != 'notStarted'">
          <span>
            <h1 v-if="transactionComplited === 'success'">Contract Created!</h1>
            <router-link to="/vote">
              <el-button>Vote at election</el-button>
            </router-link>
          </span>
          <h1 v-if="transactionComplited === 'fail'">Deploymend FAILD</h1>
        </div>
      </el-form>
      <section class="image-conteiner">
        <!-- Calendar Illustration by Manypixels Gallery -->
        <img src="../assets/calendar.svg" width="600" height="400" />
      </section>
    </section>
  </span>
</template>

<script>
import {
  ElForm,
  ElInput,
  ElButton,
  ElFormItem,
  ElDatePicker,
} from "element-plus";
import Election from "../../../tokens/build/contracts/Election.json";
const Web3 = require("web3");

export default {
  components: {
    ElForm,
    ElInput,
    ElButton,
    ElFormItem,
    ElDatePicker,
  },
  data() {
    return {
      tokenAddress: "",
      topic: "",
      startEnd: [],
      transactionComplited: "notStarted",
      // electionAddress: "",
    };
  },
  methods: {
    async confirm() {
      const web3 = await new Web3(window.ethereum);
      await window.ethereum.request({ method: "eth_requestAccounts" });
      const accounts = await web3.eth.getAccounts();
      const instanceElection = await new web3.eth.Contract(Election.abi, {
        data: Election.bytecode,
      });

      instanceElection.options.address = await accounts[0];
      // console.log(Date.now());
      // console.log(this.startEnd[0]);
      // console.log(this.startEnd[0].valueOf());
      // console.log(parseInt(this.startEnd[0].valueOf().toString().slice(0, 10)));

      await instanceElection
        .deploy({
          arguments: [
            this.tokenAddress,
            parseInt(this.startEnd[0].valueOf().toString().slice(0, 10)),
            parseInt(this.startEnd[1].valueOf().toString().slice(0, 10)),
            this.topic,
          ],
        })
        .send({
          from: accounts[0],
        })
        .on("error", function () {
          console.log("fail");
          this.transactionComplited = "fail";
        });
      this.transactionComplited = "success";
      this.tokenAddress = "";
      this.topic = "";
      this.startEnd = [];
    },
  },
};
</script>

<style scoped>
section {
  margin: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: stretch;
  flex-direction: row;
}
h1 {
  text-align: center;
}
button {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #51ddf0;
  border: none;
  color: white;
  padding: 15px 22px;
  text-align: center;
  text-decoration: none;
  font-size: 15px;
  border-radius: 12px;
  font-weight: bold;
  margin: 0;
  margin: 5px;
}
button:hover {
  background-color: #51cbf0;
  color: white;
}
a:link {
  text-decoration: none;
}
</style>
