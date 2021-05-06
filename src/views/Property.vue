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
}
</script>

