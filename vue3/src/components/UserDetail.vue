<template>
  <div>
    <h1>欢迎开始上班</h1>
    <h4>AUV,原来是您{{ username }}呀</h4>
    <button @click="goBack">一键下班</button>
  </div>
</template>

<script setup>
import { useRouter, useRoute } from 'vue-router';

const route = useRoute();
const username = route.params.username;

const router = useRouter();
const goBack = () => {
  router.push('/login');
  localStorage.removeItem('token');
};
</script>

<style scoped>
button {
  background-color: #839132;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
}
</style>