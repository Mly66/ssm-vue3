import { createRouter, createWebHistory } from 'vue-router';
import Login from '@/components/Login.vue';
import Main from '@/components/Main.vue';
import Home from '@/components/Home.vue';
import Welcome from '@/components/UserDetail.vue';
import Add from '@/components/Add.vue';
import EditUser from '@/components/EditUser.vue';
import Register from '@/components/Register.vue';
import About from '@/components/About.vue';
import Update from '@/components/Update.vue';
import img from '@/components/img.vue';
import Password from '@/components/Password.vue';
import work from '@/components/Work.vue';
import come from '@/components/Come.vue';

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
      },
      {
        path: 'About',
        name: 'About',
        component: About,
      },
      {
        path: 'Update',
        name: 'Update',
        component: Update,
      },
      {
        path: 'Password',
        name: 'Password',
        component: Password,
      }
    ]
  },
  {
    path: '/work',
    name: 'work',
    component: work,
    redirect: '/work/welcome',
    children: [
      {
        path: 'welcome/:username',
        name: 'welcome',
        component: Welcome,
        props: true
      },
      {
        path: 'come',
        name: 'come',
        component: come,
      },
      {
        path: 'Update',
        name: 'Update',
        component: Update,
      },
      {
        path: 'Password',
        name: 'Password',
        component: Password,
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
