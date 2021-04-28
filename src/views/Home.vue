<template>
  <div id="home" class="p-5">
    <div class="flex flex-wrap mb-10">
      <div class="navCate ml-auto ">Main Menu</div>
      <div class="navCate mx-auto">Beverage</div>
      <div class="navCate mr-auto">Dessert</div>
    </div>
      <food-list :isEdit='false' />
    <!-- <show-product> </show-product> -->
  </div>
</template>

<script>
import FoodList from '../components/FoodList.vue';

export default {
  name: "Home",
  components: {
    FoodList
  },
  methods: {
    currentCategory() {},
  },
};
</script>

<style scoped>
p {
  font-weight: bold;
  padding: 0.5rem;
}
span {
  font-weight: normal;
}
</style>