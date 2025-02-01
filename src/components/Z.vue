<script setup>
import { ref, reactive, watch, watchEffect, computed } from 'vue'
import { useUserStore } from '../stores/userStore';

defineProps({
  msg: String,
})

const count = ref(0);
const user = reactive({
  name: 'John Doe',
  age: 25,
});
const userName = ref('John Doe');

// function updateName(newName) {
//   user.name = newName;
// }

watch(userName, (newVal, oldVal) => {
  console.log('user changed', newVal, oldVal);
});

watchEffect(() => {
  console.log('user changed12', user);
});

const userStore = useUserStore();

const ageInFiveYears = computed(() => userStore.age + 5);

</script>

<template>
  <div>
    <h3>{{ userStore.fullName }} =>> {{ ageInFiveYears }}</h3>
    <p>{{ userStore.name }}</p>
    <p>{{ userStore.age }}</p>
    <button @click="userStore.incrementAge">Increase age</button>
    <button @click="userStore.updateName('Looly')">Update name</button>
  </div>
  <div>
    <p>user name: {{ userName }}</p>
    <input type="text" v-model="userName"  placeholder="Insrert the name"/>
  </div>
  <!-- <div>
    <p>User name: {{ user.name }}</p>
    <p>User age: {{ user.age }}</p>
    <button @click="updateName('Alex')">Change name to Alex</button>
  </div> -->
  <h1>{{ msg }}</h1>

  <div class="card">
    <button type="button" @click="count++">count is {{ count }}</button>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
  </div>

  <p>
    Check out
    <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank"
      >create-vue</a
    >, the official Vue + Vite starter
  </p>
  <p>
    Learn more about IDE Support for Vue in the
    <a
      href="https://vuejs.org/guide/scaling-up/tooling.html#ide-support"
      target="_blank"
      >Vue Docs Scaling up Guide</a
    >.
  </p>
  <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
