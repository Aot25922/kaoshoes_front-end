<template>
  <div id="catefood">
    <button class="navCate ml-auto cursor-pointer hover:bg-cadet focus:bg-cadet" v-on:click="$emit('SelectCate',null)">
      Main Menu
    </button>
    <button class="navCate ml-auto cursor-pointer hover:bg-cadet focus:bg-cadet" 
    v-for="category in categoryList" 
    :key="category.cateId"
    v-on:click="$emit('SelectCate',category.cateId)">
      {{ category.cateName }}
    </button>
  </div>
</template>

<script>
export default {
  name: "CateFood",
  emit: ["SelectCate"],
  inject: ["categoryUrl"],
  data() {
    return {
      categoryList: [],
    };
  },
  methods: {
    async getCategory() {
      try {
        const res = await fetch(this.categoryUrl);
        const data = res.json();
        return data;
      } catch (error) {
        console.log(`Counld not get! ${error}`);
      }
    },
  },
  async created() {
    this.categoryList = await this.getCategory();
  },
};
</script>