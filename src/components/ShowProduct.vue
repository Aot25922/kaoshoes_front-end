<template>
  <div class="bg-white grid grid-cols-2 justify-items-stretch p-6">
    <div class="justify-self-center">
      <img
        :src="`http://localhost:8080/product/image/${productInfo.productName}`"
        class="h-96 w-auto object-contain"
         @error="$event.target.src='https://cdn4.vectorstock.com/i/1000x1000/87/78/website-error-500-internal-server-error-artwork-vector-23988778.jpg'"
      />
    </div>
    <div>
        <p>Product Name: {{ productInfo.productName }}</p>
        <div class="flex flex-row">
        <p>Product Size:</p>
        <p v-for="size in productInfo.sizeList" :key="size.sizeId">&nbsp;{{size.size}} </p>
        </div>
        <p>Product Price: {{productInfo.price}}</p>
        <p>Product Description: {{productInfo.descript}}</p>
        <p>Product Manufacturer Date: {{new Date(productInfo.manuDate).toISOString().slice(0, 10)}}</p>
        <p>Product Brand: {{productInfo.brand.brandName}}</p>
        <button @click="goBack">Back</button>
    </div>
  </div>

</template>
<script>
export default {
  name: "ShowFood",
  props: {
    productInfo: null,
  },
  methods: {
    goBack() {
      this.$emit("go-back");
    },
  },
};
</script>

<style scoped>
.go-back {
  display: flex;
  cursor: pointer;
}
</style>