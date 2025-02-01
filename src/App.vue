<script setup>
// import Main from './components/Main.vue'
</script>

<template>
  <!-- <Main msg="Main Page" /> -->
  <div>
    <nav>
      <router-link to="/">Main</router-link> | 
      <router-link to="/about">About</router-link>
    </nav>
    <router-view />
  </div>
</template>

<style scoped>
</style>
