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
inject :  ["menuUrl"]
,
methods : {
  editData(menu){
    this.$emit("edit-mydata",menu)
  },
  async deleteData(menu){
     try {
        await fetch(`${this.menuUrl}/${menu.menuId}`, {
          method: "DELETE",
        });
      } catch (error) {
        console.log(error);
      }
  },
  async reload(){
    console.log("reload")
    this.menuList = await this.getMenuList();
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