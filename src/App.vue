<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <div class="panel" style="top:0">
      <span class="logo">{NULL}</span><input type="checkbox" name="" id="menu">
      <label for="menu" id="menuicon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 6 6">
          <path d="M 5 5 L 1 1 L 5 1 L 1 5 L 1 4 L 5 4 L 5 3 L 1 3 L 1 2 L 5 2" stroke="#FF0000" stroke-width="0.1" fill="none"/>
      </svg></label>
      
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/projects">Projects</router-link>
  </div>
  <router-view v-slot="{ Component }">
    <transition name="slide" mode="out-in">
            <component :is="Component" />
    </transition>
  </router-view>
  <footer>
    &copy;<code> NULL 2023 | Design by mobilex1122 | <a href="https://github.com/ProjNull" target="_blank">Github</a> | <a href="https://github.com/ProjNull/null-web" target="_blank">Web Source</a></code> 
  </footer>
</template>

<style scoped>
.slide-enter-active, .slide-leave-active {
    transform-origin: 50% 0%;
    transition: opacity 0.5s, transform 0.5s, filter 0.5s;
  }


  .slide-enter-from {
    opacity: 0;
    transform: translateY(-1rem);
    filter: brightness(0);
  }
  .slide-leave-to {
    opacity: 0;
    transform: translateY(-1rem);
    filter: brightness(0);
  }

</style>
