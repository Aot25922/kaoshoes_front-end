<template>
<div>
    <div class="p-5 ml-2">
      <router-link id="add" to="/Property/Add" class="navEdit rounded-l-lg bg-white" v-on:click="select=!select" :class="{'bg-red-salsa' : select}">Add Product</router-link>
      <router-link id="edit" to="/Property/Edit" class="navEdit rounded-r-lg bg-white" @click="select=!select" :class="{'bg-red-salsa': !select}">Edit/Delete Product</router-link>
   </div>
   <router-view/>
</div>
</template>
<script>

export default {
name : 'Property',
data(){
  return {
    select : true
  }
},
methods: {

}
}
</script>

