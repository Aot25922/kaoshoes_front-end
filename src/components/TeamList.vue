<template>
  <div class="flex md:px-5 gap-x-2">
    <div v-for="team in teamList" :key="team.id" class="bg-white md:p-2 md:rounded-lg">
        <div></div>
        <img src="../assets/demo.jpg" class="mx-auto md:pb-2">
        <div class="lg:text-xl text-black font-bold grid grid-cols-2 md:px-2">
            <div class="col-span-1 text-left">{{ team.id }}</div>
            <div class="col-span-1 text-right">{{ team.name }}</div>
        </div>
        <div v-for="role in team.role" :key="role.id" class="font-bold text-gray-500 text-base md:pl-3">{{ role }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TeamList",
  data(){
      return{
          teamList: [{img:'./assets/demo.jpg',id:'62130500031', name:'Thanasap Leelapisuth', role:['Frontend','Database']},
          {img:'./assets/demo.jpg',id:'62130500033', name:'Tanapat Kullakul', role:['Frontend','Backend']},
          {img:'./assets/demo.jpg',id:'62130500043', name:'Nithach Vassanapong', role:['Full-Stack Developer']}]
      }
  }
};
</script>
