<script setup>
import { useFetchData } from '../composables/useFetchData';

const { data, loading } = useFetchData('https://api.spacexdata.com/v3/dragons');
</script>

<template>
  <h1>About Page</h1>
  <div>
    <div v-if="loading">Загрузка...</div>
    <div v-else>{{ data }}</div>
  </div>
</template>
<style scoped>
</style>