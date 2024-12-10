import { createRouter, createWebHistory } from 'vue-router';
import Login from '@/components/Login.vue';
import Main from '@/components/Main.vue';
import Home from '@/components/Home.vue';
import Welcome from '@/components/UserDetail.vue';
import Add from '@/components/Add.vue';
import EditUser from '@/components/EditUser.vue';

const routes = [
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/home',
    name: 'home',
    component: Home,
    redirect: '/home/welcome',
    children: [
      {
        path: 'welcome',
        name: 'welcome',
        component: Welcome,
        props: true
      },
      {
        path: 'main',
        name: 'main',
        component: Main
      },
      {
        path: 'add',
        name: 'add',
        component: Add
      },
      {
        path: 'EditUser',
        name: 'EditUser',
        component: EditUser
      }
    ]
  },
  {
    path: '/',
    redirect: '/login'
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

router.beforeEach((to, from, next) => {
  if (to.path === '/login') {
    return next();
  }
  const token = localStorage.getItem('token');
  if (!token) {
    return next('/login');
  }
  next();
});

export default router;
