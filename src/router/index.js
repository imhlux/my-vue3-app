// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import Main from '../components/Main.vue';
import About from '../components/About.vue';

const routes = [
  { path: '/', component: Main },
  { path: '/about', component: About },
  {
    path: '/lazy',
    component: () => import('../components/LazyComponent.vue')
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;