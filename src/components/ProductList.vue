<template>
  <div id="productList" class="p-5">
    <div class="productBox">
      <div v-for="product in productList" :key="product.id">
        <img class="w-1/4 h-auto text-center bg-gray-500" v-blind:src="product.img" />
        <div class="w-3/4">
          <div class="flex flex-col text-left ml-2 text-3xl">
            <p>
              Product Name: <span> {{ product.name }}</span>
            </p>
            <p>Brand: <span> {{ product.bran_id }}</span></p>
            <p>Manufacturer Date: <span>{{ product.date }}</span></p>
            <p>
              Product Description:
              <span>{{ product.description }}</span>
            </p>
            <p>Price: <span>{{ product.price }}</span></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductList",
  data(){
    return{
      productList: [],
      url: "http://localhost:5000/productList",
    }
  },
  methods:{
    async getProductResult(){
      try{
        const res = await fetch(this.url);
        const data = res.json();
        return data;
      } catch (error) {
        console.log(`Counld not get! ${error}`);
      }
    },
  },
  async created() {
    this.productList = await this.getProductResult();
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
