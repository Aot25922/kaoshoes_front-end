<template>
  <div id="edit" class="">
    <food-list @edit-data='editData' @delete-data='deleteData' :isEdit='true' />
  </div>
</template>

<script>
import FoodList from "../components/FoodList.vue";

export default {
name: "Edit",
emits: ['edit-mydata'],
  components: {
    FoodList,
  },
methods : {
  editData(food){
    this.$emit("edit-mydata",food)
  },
  deleteData(food){
    console.log(food)
  }
}
}
</script>

<style>

</style>