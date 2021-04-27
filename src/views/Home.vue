<template>
  <div id="home" class="p-5">
  <show-product>
    
  </show-product>
  </div>

  
</template>

<script>
import ShowProduct from "../components/ShowProduct.vue";

export default {
  name: "Home",
  components: {
    ShowProduct,
  },
};
</script>

<style scoped>
p {
  font-weight: bold;
  padding: 0.5rem;
}
span {
  font-weight: normal;
}
</style>