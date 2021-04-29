<template>
    <div id="catefood" class="flex flex-wrap">
        <div
        class="navCate"
        @click="currentCategory"
        v-for="category in categoryList"
        :key="category.id"
      >
        {{ category.cateName }}
      </div>
    </div>
</template>

<script>
export default {
  name: "CateFood",
  inject: ["categoryUrl"],
  data() {
    return {
      categoryList: [],
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
    console.log(this.categoryList);
  },
};
</script>