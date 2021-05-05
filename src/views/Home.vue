<template>
  <div id="home" class="p-5">
    <product-brand @SelectBrand="selectBrand"/>
    <product-list :brandId="brandId" :showDetail="true" />
  </div>
</template>
<script>
import productBrand from "../components/ProductBrand.vue";

export default {
  name: "Home",
  inject: ["productUrl"],
  components: {
    productBrand,
  },
  data() {
    return {
      brandId : null,
      menuList: [],
    };
  },
  methods: {
    selectBrand(id){
      this.brandId = id;
    }
  },
}
</script>