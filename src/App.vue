<template>
  <div id="app" class="p-2">
    <div class="navBar mb-3">
      <router-link to="/" class="navButton">Home</router-link>
      <router-link to="/Property" class="navButton">Edit</router-link>
      <router-link to="/Team" class="navButton">About Us</router-link>
    </div>
  </div>
  <router-view/>
</template>
<script>
export default {
  name: 'App',  
}
</script>

<style>
body {
  background-color: #9A8C98;
}

#app{
  overflow-x: hidden;
}
</style>