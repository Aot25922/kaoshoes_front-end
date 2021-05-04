<template>
  <div id="home" class="p-5">
    <cate-food @SelectCate="selectCate"/>
    <menu-list :cateId="cateId"/>
  </div>
</template>
<script>
import CateFood from "../components/CateFood.vue";

export default {
  name: "Home",
  inject: ["menuUrl"],
  components: {
    CateFood,
  },
  data() {
    return {
      cateId : null,
      menuList: [],
    };
  },
  methods: {
    async getMenuList() {
      try {
        const res = await fetch(this.menuUrl);
        const data = res.json();
        return data;
      } catch (error) {
        console.log(`Counld not get! ${error}`);
      }
    },
    selectCate(id){
      this.cateId = id;
    }
  },
  // computed: {
  //   menuFilterList() {
  //     if(this.cateId == null) return this.menuList;
  //     return this.menuList.filter(list => {
  //       return list.category.cateId == this.cateId
  //     })
  //   }
  // }
}
</script>