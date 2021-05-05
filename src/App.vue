<template>
  <div id="app" class="md:p-5">
    <div class="navBar">
      <router-link to="/" class="navButton md:flex-shrink-0">Home</router-link>
      <router-link to="/Property" class="navButton md:flex-shrink-0 ">Edit</router-link>
      <router-link to="/Team" class="navButton md:flex-shrink-0">About Us</router-link>
    </div>
    <router-view />
  </div>
</template>
<script>
export default {
  name: "App",
  provide(){
    return{
      productUrl : `${this.dbUrl}/product`,
      brandUrl : `${this.dbUrl}/brand`,
      sizeUrl : `${this.dbUrl}/size`
    }
  },
  data(){
    return {
      dbUrl : "http://localhost:8080/"
    }
  }
};
</script>

<style>
body {
  background-color: #9A8C98;
}
</style>