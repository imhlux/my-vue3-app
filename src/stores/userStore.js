// src/stores/userStore.js
import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', {
  state: () => ({
    name: 'Yefim',
    age: 30,
  }),
  actions: {
    updateName(newName) {
      this.name = newName;
    },
    incrementAge() {
      this.age++;
    }
  },
  getters: {
    fullName: (state) => `${state.name} (возраст: ${state.age})`,
  },
});