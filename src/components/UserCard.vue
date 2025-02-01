<template>
  <div>
    <slot :user="user"></slot>
  </div>
</template>

<script setup>
const user = {
  name: 'Yefim',
  age: 30,
};
</script>