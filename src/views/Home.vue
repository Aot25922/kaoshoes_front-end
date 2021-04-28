<template>
  <div id="home" class="p-5">
    <div class="flex flex-wrap mb-10">
      <div class="navCate ml-auto">Main Menu</div>
      <div class="navCate mx-auto">Beverage</div>
      <div class="navCate mr-auto">Dessert</div>
    </div>
    <div class="grid grid-cols-4 filter drop-shadow-lg">
      <div class="px-2">
      <div class="bg-white col-span-1 p-5 text-lg font-medium">
        <div class="relative">
          <img src="https://i.ytimg.com/vi/vcNtRFKwMvs/maxresdefault.jpg" />
          <span
            class="absolute bottom-0 right-0 bg-cadet-dark text-white p-2 rounded"
            >Size</span
          >
        </div>
        <div class="flex flex-wrap pt-1">
          <p class="text-left w-2/3">Name</p>
          <p class="text-right w-1/3">price</p>
        </div>
        <p class="text-gray-500 text-sm">Description</p>
      </div>
      </div>

      <div class="px-2">
        <div class="bg-white col-span-1 p-5 text-lg font-medium">
          <div class="relative">
            <img
              src="https://i.pinimg.com/originals/9e/07/74/9e0774e627c454a55055542960789c16.jpg"
            />
            <span
              class="absolute bottom-0 right-0 bg-cadet-dark text-white p-2 rounded"
              >Size</span
            >
          </div>
          <div class="flex flex-wrap pt-1">
            <p class="text-left w-2/3">Name</p>
            <p class="text-right w-1/3">price</p>
          </div>
          <p class="text-gray-500 text-sm">Description</p>
        </div>
      </div>
    </div>
    <product-list></product-list>
  </div>
</template>

<script>
import ProductList from "../components/ProductList.vue";

export default {
  name: "Home",
  components: {
    ProductList,
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