<template>
  <div id="app" class="p-5">
    <div class="navBar">
      <div class="navButton">
        <router-link to="/" >Home</router-link>
      </div>
      <div class="navButton">
        <router-link to="/Property" >Edit</router-link>
      </div>
      <div class="navButton">
        <router-link to="/Team" >About Us</router-link>
      </div>
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