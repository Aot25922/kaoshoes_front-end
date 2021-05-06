<template>
  <div class="flex md:px-5 gap-x-2">
    <div v-for="team in teamList" :key="team.id" class="bg-white md:p-2 md:rounded-lg  mx-auto">
        <img v-bind:src="team.img" class="mx-auto md:pb-2 md:max-w-xl">
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
          teamList: [{img:'https://i.kym-cdn.com/entries/icons/original/000/028/026/looney_tunes_hateful_eight.jpg',id:'62130500031', name:'Thanasap Leelapisuth', role:['Frontend','Database']},
          {img:'https://wallpaperaccess.com/full/3149909.jpg',id:'62130500033', name:'Tanapat Kullakul', role:['Frontend','Backend']},
          {img:'https://static1.cbrimages.com/wordpress/wp-content/uploads/2019/12/Gintama-Meme-Feature.jpg',id:'62130500043', name:'Nithach Vassanapong', role:['Full-Stack Developer']}]
      }
  }
};
</script>
