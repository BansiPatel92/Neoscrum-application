<template>
  <div id="app">
    <div id="nav">
      <!-- <router-link to="/">Login</router-link> |
      <router-link to="/register">Register</router-link> -->
    <router-view/>
    </div>
  </div>
</template>
<script>
import Vue from 'vue'
import Toasted from 'vue-toasted';
 
Vue.use(Toasted)
 
// you can also pass options, check options reference below
Vue.use(Toasted)
export default {
  
}
</script>
<style>
  @import './assets/styles/style.css';
</style>
