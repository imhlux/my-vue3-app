<script setup>
import { useI18n } from 'vue-i18n';

const { locale } = useI18n();

defineProps({
  msg: String,
})

function switchLanguage() {
  locale.value = locale.value === 'en' ? 'ru' : 'en';
}
</script>

<template>
  <h1>Main Page</h1>
  <p>{{ $t('welcome') }}</p>
  <button @click="switchLanguage">Переключить язык</button>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
