<template>
  <div id="app" class="p-5">
    <div class="navBar">
      <router-link to="/" class="navButton md:flex-shrink-0">Home</router-link>
      <router-link to="/Property" class="navButton md:flex-shrink-0"
        >Edit</router-link
      >
      <router-link to="/Team" class="navButton md:flex-shrink-0"
        >About Us</router-link
      >
    </div>
  </div>
  <router-view />
</template>
<script>
export default {
  name: "App",
    provide(){
    return{
     categoryurl:this.categoryurl,
     sizeurl:this.sizeurl
    }
    },
  data(){
    return {
      categoryurl : "http://localhost:8080/category",
      sizeurl : "http://localhost:8080/size"
    }
  }
};
</script>

<style>
body {
  background-color: #9a8c98;
}

#app {
  overflow-x: hidden;
}
</style>