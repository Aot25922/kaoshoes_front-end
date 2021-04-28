<template>
  <div id="edit" class="">
    <food-list @edit-data='editData' @delete-data='deleteData' />
  </div>
</template>

<script>
import FoodList from "../components/FoodList.vue";

export default {
name: "Edit",
  components: {
    FoodList,
  },
methods : {
  editData(food){
    console.log(food);
  },
  deleteData(food){
    console.log(food)
  }
}
}
</script>

<style>

</style>