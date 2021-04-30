<template>
  <div id="edit" class="">
    <menu-list @edit-data='editData' @delete-data='deleteData' :isEdit='true' />
  </div>
</template>

<script>
import MenuList from "../components/MenuList.vue";

export default {
name: "Edit",
emits: ['edit-mydata'],
  components: {
    MenuList,
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