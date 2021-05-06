<template>
  <div class="bg-white grid grid-cols-2 justify-items-stretch p-6">
    <div class="justify-self-center">
      <img :src="`${productUrl}/image/${productInfo.productName}`" class="w-auto object-contain" 
      @error="$event.target.src='https://cdn4.vectorstock.com/i/1000x1000/87/78/website-error-500-internal-server-error-artwork-vector-23988778.jpg'"/>
    </div>
    <div class="md:px-5 space-y-2">
      <div class="md:text-lg">{{productInfo.brand.brandName}}</div>
      <div class="flex flex-wrap">
        <div class="md:text-4xl font-medium w-5/6">{{ productInfo.productName }}</div>
        <div class="w-1/6 text-right lg:text-2xl font-normal">{{productInfo.price}}฿</div>
      </div>  
        <div class="md:text-lg font-normal md:pl-5">Size:</div>
        <div class="flex flex-wrap">
          <div class=" lg:text-xl md:p-3 w-1/3" v-for="size in productInfo.sizeList" :key="size.sizeId">
            <div class="rounded-sm md:p-5 text-center border-2 border-gray-400 hover:border-cadet-dark">
              {{size.size}}
            </div>
          </div>
        </div>
        <div class="md:text-xl md:py-5 font-normal">&emsp;&emsp;{{productInfo.descript}}</div>
        <div class="text-right text-gray-500 md:py-5">Manufacturer: {{new Date(productInfo.manuDate).toISOString().slice(0, 10)}}</div>    
      <button class="md:py-5 md:px-10 bg-red-600 text-black font-bold text-2xl drop-shadow-lg rounded hover:bg-red-salsa float-right" @click="goBack">Back</button>
    </div>
  </div>

</template>
<script>
export default {
  name: "ShowFood",
  inject: ["productUrl"],
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