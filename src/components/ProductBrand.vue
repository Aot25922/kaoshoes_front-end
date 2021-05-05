<template>
  <div id="productbrand" class="grid grid-cols-4 gap-4">
    <button class="navCate cursor-pointer hover:bg-cadet focus:bg-cadet" v-on:click="$emit('SelectBrand',null)">
      Main Menu
    </button>
    <button class="navCate cursor-pointer hover:bg-cadet focus:bg-cadet " 
    v-for="brand in brandList" 
    :key="brand.brandId"
    v-on:click="$emit('SelectBrand',brand.brandId)">
      {{ brand.brandName }}
    </button>
  </div>
</template>

<script>
export default {
  name: "productbrand",
  emit: ["SelectBrand"],
  inject: ["brandUrl"],
  data() {
    return {
      brandList: [],
    };
  },
  methods: {
    async getbrand() {
      try {
        const res = await fetch(this.brandUrl);
        const data = res.json();
        return data;
      } catch (error) {
        console.log(`Counld not get! ${error}`);
      }
    },
  },
  async created() {
    this.brandList = await this.getbrand();
  },
};
</script>