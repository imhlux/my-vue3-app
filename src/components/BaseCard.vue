<!-- <template>
  <div class="card">
    <slot></slot>
  </div>
</template>

<style scoped>
.card {
  padding: 16px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background: #f9f9f9;
  color: #333;
}
</style> -->

<template>
  <div class="card">
    <header>
      <slot name="header"></slot> <!-- Именованный слот -->
    </header>
    <main>
      <slot></slot> <!-- Обычный слот -->
    </main>
  </div>
</template>

<style scoped>
.card {
  border: 1px solid #ddd;
  padding: 16px;
  border-radius: 8px;
}
header {
  font-weight: bold;
  margin-bottom: 8px;
}
</style>