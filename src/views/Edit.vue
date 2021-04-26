<template>
  <div class="">
    <product-list :isEdit="true"/>
  </div>
</template>

<script>
import ProductList from "../components/ProductList.vue";
export default {
name: "Edit",
  components: {
    ProductList,
  },
}
</script>

<style>

</style>