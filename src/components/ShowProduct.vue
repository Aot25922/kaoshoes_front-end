<template>
    <span class="go-back">
        <button @click="goBack">Back</button>
    </span>
</template>
<script>
export default {
    name: "ShowProduct",
    methods:(){
        goBack(){
            return this.$router.go(-1);
        }
    }
}
</script>

<style scoped>
.go-back{
    display: flex;
    cursor: pointer;
}
</style>