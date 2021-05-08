<template>
  <div id="app" class="p-5">
    <div class="navBar">
      <router-link to="/" class="navButton md:flex-shrink-0 md:rounded-l-md" >Home</router-link>
      <router-link to="/Property" class="navButton md:flex-shrink-0 " >Edit</router-link>
      <router-link to="/Team" class="navButton md:flex-shrink-0 md:rounded-r-md" >About Us</router-link>
    </div>
    <router-view />
  </div>
</template>
<script>
export default {
  name: "App",
  provide(){
    return{
      productUrl : `${this.dbUrl}/product`,
      brandUrl : `${this.dbUrl}/brand`,
      sizeUrl : `${this.dbUrl}/size`
    }
    
  },
  watch:{
    $route (to){
        const nav = document.getElementsByClassName("navButton")
        for(let  i=0;i<nav.length;i++){
          if(nav[i].getAttribute("href")==to.path){
            nav[i].style.backgroundColor="white"
            nav[i].style.color="#22223B"
          }
          else{
            nav[i].style.backgroundColor="#22223B"
            nav[i].style.color="white"
          }
        }
    }
} ,
  data(){
    return {
      dbUrl : "http://localhost:8080/"
      // dbUrl : "https://kaoshoes.ddns.net/api"
    }
  },
  methods : {
  }
};
</script>

<style>
body {
  background-color: #9A8C98;
}
.navButton:hover {
  background-color:powderblue;
}
</style>