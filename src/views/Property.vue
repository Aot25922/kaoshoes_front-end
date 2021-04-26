<template>
<div>
    <div class="p-5 ml-2">
      <router-link id="add" to="/Property/Add" class="navEdit rounded-l-lg bg-white" v-on:click="select=true" :class="{'bg-red-salsa' : select==true}">Add Product</router-link>
      <router-link id="edit" to="/Property/Edit" class="navEdit rounded-r-lg bg-white" @click="select=false" :class="{'bg-red-salsa': select==false}">Edit/Delete Product</router-link>
   </div>
   <router-view/>
</div>
</template>
<script>

export default {
name : 'Property',
data(){
  return {
    select : null
  }
},
methods: {

}
}
</script>

