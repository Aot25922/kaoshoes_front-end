<template>
  <div id="productList" class="p-5">
    <div
      v-for="product in productList"
      :key="product.id"
      class="bg-white my-5 relative"
    >
      <div v-if="isEdit" class="absolute top-0 right-0">
        <button @click="$emit('edit-data', product)">Edit</button>
        <button @click="$emit('delete-data', product)">Delete</button>
      </div>

      <img
        class="w-1/4 h-auto text-center bg-gray-500"
        v-bind:src="product.img"
        alt="Image here"
      />
      <div class="flex flex-col text-left ml-2 text-3xl">
        <p>
          Product Name: <span> {{ product.name }}</span>
        </p>
        <p>
          Brand: <span> {{ product.bran_id }}</span>
        </p>
        <p>
          Manufacturer Date: <span>{{ product.date }}</span>
        </p>
        <p>
          Product Description:
          <span>{{ product.description }}</span>
        </p>
        <p>
          Price: <span>{{ product.price }}</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductList",
  emits: ["edit-data", "delete-data"],
  props: {
    isEdit: Boolean,
  },
  data() {
    return {
      productList: [],
      url: "http://localhost:5000/productList",
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
    this.productList = await this.getProductResult();
    console.log(this.productList)
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
