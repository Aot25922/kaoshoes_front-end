<template>
<div>
    <div class="p-5 ml-10">
      <router-link id="add" to="/Property/Add" class="navEdit rounded-l bg-white " v-on:click="select=true" :class="{'bg-red-salsa' : select==true}">Add Food</router-link>
      <router-link id="edit" to="/Property/Edit" class="navEdit rounded-r bg-white" @click="select=false" :class="{'bg-red-salsa': select==false}">Edit/Delete Food</router-link>
   </div>
   <router-view class="pt-5 pl-4"  @edit-mydata="mydata" />
</div>
</template>
<script>

export default {
name : 'Property',
data(){
  return {
    select : null,
    food : null
  }
},
methods: {
  mydata(food){
    console.log(food)
    this.food=food
  }
}
}
</script>

