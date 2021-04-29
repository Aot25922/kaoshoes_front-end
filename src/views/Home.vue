<template>
  <div id="home" class="p-5">
    <div class="flex flex-wrap mb-10">
      <div
        class="navCate ml-auto cursor-pointer"
        @click="currentCategory"
        v-for="category in CategoryList"
        :key="category.id"
      >
        {{ category.cateName }}
      </div>
    </div>
    <food-list :isEdit="false" />
    <!-- <show-product> </show-product> -->
  </div>
</template>

<script>
import FoodList from "../components/FoodList.vue";

export default {
  name: "Home",
  components: {
    FoodList,
  },
  provide() {
    return {
      categoryurl: this.categoryurl,
    };
  },
  inject: ["categoryurl"],
  data() {
    return {
      CategoryList: [],
    };
  },
  methods: {
    currentCategory(event) {
      let category = document.getElementsByClassName("navCate");
      for (let test = 0; test < category.length; test++) {
        if (event.target.innerHTML != category[test].innerHTML) {
          category[test].style.backgroundColor = "white";
          category[test].style.color = "#22223B";
        } else {
          category[test].style.backgroundColor = "#4A4E69";
          category[test].style.color = "white";
        }
      }
    },
    async getProductResult() {
      try {
        const res = await fetch(this.categoryurl);
        const data = res.json();
        return data;
      } catch (error) {
        console.log(`Counld not get! ${error}`);
      }
    },
  },
  async created() {
    this.CategoryList = await this.getProductResult();
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