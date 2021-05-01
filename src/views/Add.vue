<template>
  <div class="">
    <product-form :isEdit="isEdit" :foodToEdit="foodToEdit" @cancel-edit="$emit('cancel-edit')"/>
  </div>
</template>

<script>
import productForm from '../components/Form.vue'
export default {
name: "Add",
  components: {
    productForm,
  },
  emits:['cancel-edit'],
props : {
  isEdit:Boolean,
  foodToEdit : null
},
}
</script>

<style>

</style>