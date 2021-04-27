<template>
  <div class="">
    <show-product :isEdit="true"/>
  </div>
</template>

<script>
import ShowProduct from "../components/ShowProduct.vue";
export default {
name: "Edit",
  components: {
    ShowProduct,
  },
}
</script>

<style>

</style>