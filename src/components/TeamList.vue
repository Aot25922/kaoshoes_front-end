<template>
  <div class="grid grid-cols-3 md:px-5 space-x-1">
    <div v-for="team in teamList" :key="team.id" class="bg-white p-2 rounded-lg">
        <img v-bind:src="team.img" class="mx-auto pb-2">
        <div class="md:text-xl text-black font-bold grid grid-cols-2 md:px-2">
            <div class="col-span-1 md:text-left">{{ team.id }}</div>
            <div class="col-span-2 md:text-right">{{ team.name }}</div>
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
          teamList: [{img:'https://i.kym-cdn.com/entries/icons/original/000/028/026/looney_tunes_hateful_eight.jpg',id:'62130500031', name:'Thanasap Leelapisuth', role:['Frontend','Database']},
          {img:'https://wallpaperaccess.com/full/3149909.jpg',id:'62130500033', name:'Tanapat Kullakul', role:['Frontend','Backend']},
          {img:'https://static1.cbrimages.com/wordpress/wp-content/uploads/2019/12/Gintama-Meme-Feature.jpg',id:'62130500043', name:'Nithach Vassanapong', role:['Full-Stack Developer']}]
      }
  }
};
</script>
