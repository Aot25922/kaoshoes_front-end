<template>

  <div id="edit">
    <product-list @edit-data='editData'  :isEdit='true' v-show="!toEdit"  @error-type="pageError" v-if="!error"/>
    <edit-form :isEdit="true" v-if="toEdit&&!error" :productToEdit="productToedit" @cancel-form="toEdit=false" @reload-data="reload"  />
  </div>
  <error-detail v-if="error" :errorType="errorType"/>
</template>

<script>
import editForm from "../components/Form.vue";
export default {
  name: "Edit",
  emits: ["edit-mydata","my-focus"],
  components: {
    editForm,
  },

  data() {
    return {
      productList: [],
      toEdit: false,
      productToedit: null,
      error:false,
      errorType:null
    };
  },
    methods: {
     pageError(e){
      this.error=true;
      console.log(e)
      this.errorType=e
    },  
    editData(product) {
      this.productToedit = product;
      this.toEdit = true;
    },
    reload() {
      this.toEdit = false;
      this.$router.go(0);
    },
  }
}

</script>

<style>

</style>



