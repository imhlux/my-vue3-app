import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createPinia } from 'pinia'
import router from './router'
import { createI18n } from 'vue-i18n';
import messages from './locales';

const i18n = createI18n({
  locale: 'en',
  messages,
});

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(i18n)

app.mount('#app');


// createApp(App).mount('#app')
