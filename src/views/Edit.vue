<template>
  <div id="edit" class="">
    <show-food :isEdit="true"/>
  </div>
</template>

<script>

import ShowFood from "../components/ShowFood.vue";
export default {
name: "Edit",
  components: {
    ShowFood,
  },
}
</script>

<style>

</style>