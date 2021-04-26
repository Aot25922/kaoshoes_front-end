<template>
  <div id="home" class="p-5">
    <div class="productBox">
      <img 
        src="https://www.meme-arsenal.com/memes/49027a1337025ec59be1a3bedb120274.jpg"
        class="w-1/4 h-auto text-center"
      />
      <div class="w-3/4">
        <div class="flex flex-col text-left ml-2 text-3xl">
          <p>Product Name: <span>Pelo</span></p>
          <p>Brand: <span>Sr.</span></p>
          <p>Manufacturer Date: <span>17/2/63</span></p>
          <p>
            Product Description:
            <span
              >Bruh... Ahhh Bruh... Ahhh Bruh... AhhhBruh... AhhhBruh...
              AhhhBruh... Ahhh Bruh... AhhhBruh... AhhhBruh... AhhhBruh...
              AhhhBruh... Ahhh Bruh... AhhhBruh... AhhhBruh... Ahhh EE
              EEEEEEEEEEEEEE EEEEEEEE LOL xaxaaxaxaa</span
            >
          </p>
          <p>Price: <span>Free</span></p>
        </div>
      </div>
    </div>
    <product-list class="pt-5"/>
  </div>

  
</template>

<script>
import ProductList from "../components/ProductList.vue";

export default {
  name: "Home",
  components: {
    ProductList,
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