<template>
    //TO DO
    <div>
        <div v-if="isThereMetaMask === 'true'" v-if="this.connected === true" class="notice">
            <button v-if="this.connected !== true" @click="connectMetaMask" >
                <!-- <button @click="connectMetaMask" > -->

                Connect Meta Mask
            </button>
        </div>
        <p v-else >Install MetaMask</p>
    </div>

</template>

<script>

function checkMetaMask(){
    if (typeof window.ethereum !== 'undefined') {
        var isThereMetaMask = "true";
    }
    return isThereMetaMask;
}

export default{
    data() {
        return{
            isThereMetaMask: checkMetaMask(),
            // isMetaMaskAccountConnected: isAccountConnected(),
            // accounts: 0
            connected: "true"
        };
    },
    methods:{
        async connectMetaMask(){
            await window.ethereum.request({
                method: 'eth_requestAccounts'
            });
            this.connected = "true";
        },
    }
};
</script>

<style>

</style>
