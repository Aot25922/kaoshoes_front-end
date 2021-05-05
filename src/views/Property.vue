<template>
<div>
    <div class="md:p-5 md:ml-10">
      <router-link id="add" to="/Property/Add" class="navEdit rounded-l bg-white " @click="select=true" :class="{'bg-red-salsa' : select==true}">Add Product</router-link>
      <router-link id="edit" to="/Property/Edit" class="navEdit rounded-r bg-white" @click="select=false" :class="{'bg-red-salsa': select==false}">Edit/Delete Product</router-link>
   </div>
   <router-view class="pt-5 pl-4"/>
</div>
</template>
<script>

export default {
name : 'Property',
data(){
  return {
  }
}
}
</script>

