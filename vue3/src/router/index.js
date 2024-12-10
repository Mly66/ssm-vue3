import { createRouter, createWebHistory } from 'vue-router';
import Login from '@/components/Login.vue';
import Main from '@/components/Main.vue';
import Home from '@/components/Home.vue';
import Welcome from '@/components/UserDetail.vue';
import Add from '@/components/Add.vue';
import EditUser from '@/components/EditUser.vue';
import Register from '@/components/Register.vue'
const routes = [
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/register',
    name: 'register',
    component: Register
  },
  {
    path: '/home',
    name: 'home',
    component: Home,
    redirect: '/home/welcome',
    children: [
      {
        path: 'welcome/:username',
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
        component: EditUser,
        props: true
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
  const token = localStorage.getItem('token');
  if (!token && (to.path === '/login' || to.path === '/register')) {
    return next();
  }
  if (!token) {
    return next('/login');
  }
  next();
});


export default router;
