<template>
  <div id="home" class="p-5">
    <div v-show="!viewDetail">
    <product-brand @SelectBrand="selectBrand"/>
    <product-list :brandId="brandId" :showDetail="true" @show-detail="showProductDetail" @error-type="pageError"/>
    </div>
    <show-product v-if="viewDetail" :productInfo="productDetail" @go-back="viewDetail=false" />
    <error-detail v-if="error" :errorType="errorType"/>
  </div>
</template>
<script>
import productBrand from "../components/ProductBrand.vue";
import showProduct from "../components/ShowProduct.vue"
export default {
  name: "Home",
  inject: ["productUrl"],
  components: {
    productBrand,
    showProduct,
  },
  data() {
    return {
      brandId : null,
      menuList: [],
      productDetail:null,
      viewDetail : false,
      error:false,
      errorType:null
    };
  },
  methods: {
    pageError(e){
      this.error=true;
      this.errorType=e
    },
    selectBrand(id){
      this.brandId = id;
    },
    showProductDetail(product){
      this.productDetail=product
      this.viewDetail=true
    }
  },
}
</script>