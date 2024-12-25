import {
  createRouter,
  createWebHistory
} from 'vue-router';
import Login from '@/components/Login.vue';
import Main from '@/components/Main.vue';
import Home from '@/components/Home.vue';
import Welcome from '@/components/UserDetail.vue';
import Add from '@/components/Add.vue';
import EditUser from '@/components/EditUser.vue';
import Register from '@/components/Register.vue';
import About from '@/components/About.vue';
import Update from '@/components/Update.vue';
import Password from '@/components/Password.vue';
import work from '@/components/Work.vue';
import come from '@/components/work/Come.vue';
import pass from '@/components/work/pass.vue';
import up from '@/components/work/up.vue';
import worker from '@/components/work/worker.vue';
import { ElMessage } from 'element-plus';

const routes = [{
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
    children: [{
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
      },
      {
        path: 'come',
        name: 'come',
        component: come,
      },
      {
        path: 'up',
        name: 'up',
        component: up,
      },
      {
        path: 'pass',
        name: 'pass',
        component: pass,
      }
    ]
  },
  // {
  //   path: '/work',
  //   name: 'work',
  //   component: work,
  //   redirect: '/work/worker',
  //   children: [
  //     {
  //       path: 'worker/:username',
  //       name: 'worker',
  //       component: worker,
  //       props: true
  //     },
  //     {
  //       path: 'come',
  //       name: 'come',
  //       component: come,
  //     },
  //     {
  //       path: 'up',
  //       name: 'up',
  //       component: up,
  //     },
  //     {
  //       path: 'pass',
  //       name: 'pass',
  //       component: pass,
  //     }
  //   ]
  // },
  {
    path: '/',
    redirect: '/login'
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});
const rolePermissions = {
  employee: ['/home/main', '/home/add', '/home/EditUser', '/home/About', '/home/Update', '/home/Password'],
  admin: ['/home/come', '/home/up', '/home/pass']
};

router.beforeEach((to, from, next) => {
  const token = localStorage.getItem('token');
  const userInfo = localStorage.getItem('userInfo');

  if (userInfo) {
    const [userRole, username] = userInfo.split(':');
    let role = (userRole === '管理员') ? 'admin' : 'employee';
    if (role) {
      const allowedRoutes = rolePermissions[role];
      if (!allowedRoutes.includes(to.path)) {
        return next();
      } else {
        ElMessage.error('没有权限');
        return next('/login');
      }
    }
  }

  if (!token && (to.path === '/login' || to.path === '/register')) {
    return next();
  }
  if (!token) {
    return next('/login');
  }

  next();
});

export default router;