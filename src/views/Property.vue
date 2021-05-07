<template>
<div class="md:my-5">
    <div class="p-5 ml-10">
      <router-link id="add" to="/Property/Add" class="navEdit rounded-l bg-white ">Add Product</router-link>
      <router-link id="edit" to="/Property/Edit" class="navEdit rounded-r bg-white">Edit/Delete Product</router-link>
   </div>
   <router-view class="pt-5 pl-4"/>
</div>
</template>
<script>

export default {
name : 'Property',
watch:{
    $route (to){
        const nav = document.getElementsByClassName("navEdit")
        for(let i=0;i<nav.length;i++){
          if(nav[i].getAttribute("href")==to.path){
            nav[i].style.backgroundColor="white"
            nav[i].style.color="#22223B"
          }
          else{
            nav[i].style.backgroundColor="#22223B"
            nav[i].style.color="white"
          }
        }
    }
} ,
mounted(){
    const nav = document.getElementsByClassName("navEdit")
    for(let i=0;i<nav.length;i++){
          if(nav[i].getAttribute("href")==this.$route.path){
            nav[i].style.backgroundColor="white"
            nav[i].style.color="#22223B"
          }
          else{
            nav[i].style.backgroundColor="#22223B"
            nav[i].style.color="white"
          }
        }
}
}
</script>

