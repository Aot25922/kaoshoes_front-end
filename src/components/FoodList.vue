<template>
  <div class="px-2" v-for="food in foodList" :key="food.id">
    <div class="bg-white col-span-1 p-5 text-lg font-medium h-full">
      <div class="relative">
        <img
          :src="food.img"
          class="cursor-pointer"
        />
        <span
          class="absolute bottom-0 right-0 bg-cadet-dark text-white p-2 rounded"
          >{{ food.size }}</span
        >
      </div>
      <div class="flex flex-wrap pt-1">
        <p class="text-left w-2/3">{{food.name}}</p>
        <p class="text-right w-1/3">{{food.price}}฿</p>
      </div>
      <p class="text-gray-500 text-sm">{{food.description}}</p>
    </div>
  </div>
</template>
<script>
export default {
  name: "FoodList",
//   emits: ["edit-data", "delete-data"],
  props: {
    isEdit: Boolean,
  },
  data() {
    return {
      foodList: [],
      url: "http://localhost:5000/foodList",
    };
  },
  methods: {
    async getProductResult() {
      try {
        const res = await fetch(this.url);
        const data = res.json();
        return data;
      } catch (error) {
        console.log(`Counld not get! ${error}`);
      }
    },
  },
  async created(){
    this.foodList = await this.getProductResult();
    console.log(this.foodList)
  }
};
</script>
