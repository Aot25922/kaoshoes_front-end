<template>
  <div id="edit" class="">
    <p></p>
    <menu-list @edit-data='editData'  :isEdit='true' v-show="!toEdit" ref="list"  />
    <edit-form :isEdit="true" v-if="toEdit" :foodToEdit="menuToEdit" @cancel-form="toEdit=false" @reload-data="reload"  />
  </div>
</template>

<script>
import editForm from '../components/Form.vue'
export default {
name: "Edit",
emits: ['edit-mydata'],
  components: {
    editForm,
  },

data(){
  return{
    menuList: [],
    toEdit : false,
    menuToEdit : null,
    componentKey: 0,
  }
},
inject :  ["menuUrl"]
,
methods : {
  editData(menu){
    this.menuToEdit=menu
    this.toEdit=true
  },
  reload(){
    console.log("test")
    this.toEdit=false
    this.$router.go(0)
  }

}
}
</script>

<style>

</style>