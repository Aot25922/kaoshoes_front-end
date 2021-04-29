<template>
  <div id="home" class="p-5">
    <div class="flex flex-wrap mb-10">
      <div class="navCate md:ml-auto cursor-pointer" @click="currentCategory">Main Menu</div>
      <div class="navCate md:mx-auto cursor-pointer" @click="currentCategory">Beverage</div>
      <div class="navCate md:mr-auto cursor-pointer" @click="currentCategory">Dessert</div>
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
    currentCategory(event) {
      // console.log(document.getElementsByClassName("navCate"))
      let category = document.getElementsByClassName("navCate")
      for(let test=0;test<category.length;test++ ){
        if(event.target.innerHTML!=category[test].innerHTML){
          category[test].style.backgroundColor='white'
           category[test].style.color='#22223B'
        }
        else{
          category[test].style.backgroundColor='#4A4E69'
          category[test].style.color='white'
        }
      }
    },
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