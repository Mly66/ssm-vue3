import { createRouter, createWebHistory } from 'vue-router';
import HelloWorld from '@/components/HelloWorld.vue';
import UserHome from '@/components/userHome.vue';

const routes = [
  {
    path: '/HelloWorld',
    name: 'HelloWorld',
    component: HelloWorld
  },
  {
    path: '/',
    name: 'home',
    component: UserHome
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
