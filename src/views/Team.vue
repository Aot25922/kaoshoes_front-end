<template>
<div class="bg-white rounded-sm my-7 mx-auto w-1/6 ">
  <h1 class="py-3 md:text-3xl font-bold text-center">Our Team</h1></div>
  <team-list/>
</template>

<script>
import TeamList from '../components/TeamList.vue'

export default {
  name: 'Team',
  components: {
    TeamList
  },
  data(){
    return{
      teamList: []
    };
  },
}
</script>
