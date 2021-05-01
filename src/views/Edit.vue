<template>
  <div id="edit" class="">
    <menu-list @edit-data='editData' @delete-data='deleteData' :isEdit='true' :menuList="menuList"/>
  </div>
</template>

<script>
import MenuList from "../components/MenuList.vue";

export default {
name: "Edit",
emits: ['edit-mydata'],
  components: {
    MenuList,
  },
data(){
  return{
    menuList: []
  }
},
inject :  ["menuUrl"],
methods : {
  editData(food){
    this.$emit("edit-mydata",food)
  },
  deleteData(food){
    console.log(food)
  },
  async getMenuList() {
      try {
        const res = await fetch(this.menuUrl);
        const data = res.json();
        return data;
      } catch (error) {
        console.log(`Counld not get! ${error}`);
      }
    }
  },
  async created() {
    this.menuList = await this.getMenuList();
  }
}

</script>

<style>

</style>