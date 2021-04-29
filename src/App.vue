<template>
  <div id="app" class="h-screen w-screen md:p-5 bg-helio-dark">
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
      menuUrl : `${this.dbUrl}/menu`,
      categoryUrl : `${this.dbUrl}/category`,
      sizeUrl : `${this.dbUrl}/size`
    }
  },
  data(){
    return {
      dbUrl : "http://kaofood.ddns.net:8080"
    }
  }
};
</script>