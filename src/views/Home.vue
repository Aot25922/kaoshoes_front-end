<template>
  <div id="home" class="p-5">
    <div class="flex flex-wrap mb-10">
      <router-link id="catefood" to="/CateFood" class="navCate ml-auto ">Main Menu</router-link>
      <router-link id="catefood" to="/CateFood" class="navCate mx-auto">Beverage</router-link>
      <router-link id="catefood" to="/CateFood"  class="navCate mr-auto">Dessert</router-link>
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
  data(){
    return{
      select: null
    }
  }
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