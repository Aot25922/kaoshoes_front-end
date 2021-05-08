<template>
  <div class="grid grid-cols-3 md:px-5 space-x-1">
    <div v-for="team in teamList" :key="team.id" class="bg-white p-2 rounded-lg">
        <div class="md:text-xl text-black font-bold grid grid-cols-3 md:px-2">
            <div class="col-span-1 text-left">{{ team.id }}</div>
            <div class="col-span-2 text-right">{{ team.name }}</div>
        </div>
        <div v-for="role in team.role" :key="role.id" class="font-bold text-gray-500 md:text-base md:pl-3">{{ role }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TeamList",
  data(){
      return{
          teamList: [{id:'62130500031', name:'Thanasap Leelapisuth', role:['Frontend','Database']},
          {id:'62130500033', name:'Tanapat Kullakul', role:['Frontend','Backend']},
          {id:'62130500043', name:'Nithach Vassanapong', role:['Full-Stack Developer']}]
      }
  }
};
</script>
