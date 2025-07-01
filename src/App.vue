<template>
  <div id="app">
    <NavBar />
    <router-view></router-view>
    <SiteFooter/>
  </div>
 </template> 

<script>
import NavBar from './components/NavBar.vue';
import SiteFooter from './components/SiteFooter.vue'
export default {
components: {
NavBar,
SiteFooter,
}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
