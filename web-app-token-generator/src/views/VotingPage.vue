<template>
  <div class="container">
    <section>
      <el-form style="max-width: 800px">
        <el-form-item label="Address of voting contract">
          <el-input v-model="contractAddress" placeholder="0x...." />
        </el-form-item>
        <el-form-item>
          <el-button
            class="button"
            type="primary"
            style="background-color: #51ddf0 !important"
            @click="confirm"
            >Confirm</el-button
          >
        </el-form-item>
      </el-form>
      <span v-show="topic != ''">
        <p class="topic">{{ topic }}</p>
        <section v-show="isActive === true && transactionComplited === ''">
          <p>Vote with yes, no or abstain on this election.</p>
          <el-button
            class="button"
            type="primary"
            style="background-color: #01a6f3"
            @click="voteYes"
            >Yes</el-button
          >
          <el-button
            class="button"
            type="primary"
            style="background-color: #01a6f3"
            @click="voteNo"
            >No</el-button
          >
          <el-button
            class="button"
            type="primary"
            style="background-color: #01a6f3"
            @click="voteAbs"
            >Abstain</el-button
          >
        </section>
        <section v-show="isActive === false">
          <p>Election is not active now!</p>
          <section v-if="finished === true">
            <p>Results are:</p>
            <el-tag class="ml-2" type="success"
              >Yes votes: {{ resultsYes }}</el-tag
            >
            <el-tag class="ml-2" type="danger"
              >No votes: {{ resultsNo }}</el-tag
            >
            <el-tag class="ml-2" type="info"
              >Abstain votes: {{ resultsAbstain }}</el-tag
            >
            <p class="result" v-if="winner === true">Poposal accepted</p>
            <p class="result" v-show="winner === false">Poposal declinced</p>
          </section>
        </section>
        <div v-show="transactionComplited === 'fail' && isActive === true">
          <h2>Voting faild</h2>
        </div>
        <div v-show="transactionComplited === 'succses' && isActive === true">
          <h2>Voted successfully</h2>
        </div>
      </span>
    </section>
    <!-- Sticky Note Illustration by Manypixels Gallery -->
    <img src="../assets/sticky-note.svg" width="600" height="400" />
  </div>
</template>

<script>
import { ElForm, ElInput, ElButton, ElFormItem, ElTag } from "element-plus";
import Election from "../../../tokens/build/contracts/Election.json";

const Web3 = require("web3");

export default {
  components: {
    ElForm,
    ElInput,
    ElButton,
    ElFormItem,
    ElTag,
  },
  data() {
    return {
      contractAddress: "",
      votingContract: {},
      topic: "",
      accounts: [],
      isActive: false,
      finished: false,
      resultsYes: 0,
      resultsNo: 0,
      resultsAbstain: 0,
      transactionComplited: "",
      winner: Boolean,
    };
  },
  methods: {
    async confirm() {
      const web3 = await new Web3(window.ethereum);
      await window.ethereum.request({ method: "eth_requestAccounts" });
      this.accounts = await web3.eth.getAccounts();
      this.votingContract = new web3.eth.Contract(
        Election.abi,
        this.contractAddress
      );
      this.topic = await this.votingContract.methods.topic().call();
      this.startTime =
        (await this.votingContract.methods.startTime().call()) * 1000;
      this.endTime =
        (await this.votingContract.methods.endTime().call()) * 1000;
      const currTime = Date.now().valueOf();

      if (currTime >= this.startTime && currTime < this.endTime) {
        this.isActive = true;
        this.finished = false;
      } else if (currTime < this.startTime) {
        this.isActive = false;
        this.finished = false;
      } else {
        this.isActive = false;
        this.finished = true;
      }

      if (this.finished === true) {
        this.resultsYes = await this.votingContract.methods.resultsYes().call();
        this.resultsNo = await this.votingContract.methods.resultsNo().call();
        this.resultsAbstain = await this.votingContract.methods
          .resultsAbstain()
          .call();
        this.winner = await this.votingContract.methods.getWinner().call();
        console.log(this.winner);
      }
    },
    async voteYes() {
      await this.votingContract.methods
        .voteYes()
        .send({ from: this.accounts[0], gasPrice: "30000", gas: 5000000 })
        .on("error", function () {
          console.log("fail");
          this.transactionComplited = "fail";
        });
      this.transactionComplited = "succses";
    },
    async voteNo() {
      await this.votingContract.methods
        .voteNo()
        .send({ from: this.accounts[0], gasPrice: "30000", gas: 5000000 })
        .on("error", function () {
          console.log("fail");
          this.transactionComplited = "fail";
        });
      this.transactionComplited = "succses";
    },
    async voteAbs() {
      await this.votingContract.methods
        .voteAbstain()
        .send({ from: this.accounts[0], gasPrice: "300000", gas: 5000000 })
        .on("error", function () {
          console.log("fail");
          this.transactionComplited = "fail";
        });
      this.transactionComplited = "succses";
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  flex-direction: row;
  margin: 10px;
  align-items: center;
}
.el-button {
  justify-content: center;
  align-items: center;
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
.el-button:hover {
  box-shadow: 0px 15px 20px rgba(88, 225, 235, 0.521);
  color: white;
}
.topic {
  text-align: center;
  font-size: 20px;
}
.result {
  text-align: center;
  font-size: 25px;
  color: rgb(0, 112, 204);
}
</style>
