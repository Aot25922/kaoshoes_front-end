<template>

  <div id="edit">
    <product-list @edit-data='editData'  :isEdit='true' v-show="!toEdit"  />
    <edit-form :isEdit="true" v-if="toEdit" :productToEdit="productToedit" @cancel-form="toEdit=false" @reload-data="reload"  />
  </div>
</template>

<script>
import editForm from "../components/Form.vue";
export default {
  name: "Edit",
  emits: ["edit-mydata"],
  components: {
    editForm,
  },

  data() {
    return {
      productList: [],
      toEdit: false,
      productToedit: null,
    };
  },
    methods: {
    editData(product) {
      this.productToedit = product;
      this.toEdit = true;
    },
    reload() {
      this.toEdit = false;
      this.$router.go(0);
    },
  },
}

</script>

<style>

</style>



