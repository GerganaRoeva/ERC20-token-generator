<template>
    <p v-if="isThereMetaMask === 'true'" class="notice" >!!! Get MetaMask !!!</p>
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
        };
    }
};
</script>

<style scoped>
.notice{
    color: white;
    border-color: red;
    text-align: center;
    font-size: 160%;
    background-color: red;
}
</style>
