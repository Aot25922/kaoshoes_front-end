<template>
  <div id="app" class="p-5">
    <div class="navBar">
        <router-link to="/" class="navButton md:flex-shrink-0">Home</router-link>
        <router-link to="/Property" class="navButton md:flex-shrink-0 ">Edit</router-link>
        <router-link to="/Team" class="navButton  md:flex-shrink-0">About Us</router-link>
      </div>
  </div>
  <router-view />
</template>
<script>
export default {
  name: "App",
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