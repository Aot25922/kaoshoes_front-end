<template>
  <div id="home" class="p-5">
    <cate-food/>
    <menu-list/>
  </div>
</template>
<script>
import MenuList from "../components/MenuList.vue";
import CateFood from "../components/CateFood.vue";

export default {
  name: "Home",
  components: {
    MenuList,
    CateFood,
  },
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
    }
  }
}
</script>