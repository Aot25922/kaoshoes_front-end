<template>
  <div class="p-2 bg-helio-dark">
    <div class="navBar">
      <router-link to="/" class="navButton">Home</router-link>
      <router-link to="/Property" class="navButton">Edit</router-link>
      <router-link to="/Team" class="navButton">About Us</router-link>
    </div>
  </div>
  <router-view />
</template>
