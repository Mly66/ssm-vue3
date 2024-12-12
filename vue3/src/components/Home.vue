<template>
  <el-container style="height: 100vh;">
    <el-header class="header">
      <div class="header-content">
        <span class="user-info">{{ userInfo }}</span>
        <el-button type="primary" @click="tuichu">退出</el-button>
      </div>
    </el-header>
    <el-container>
      <el-aside width="200px">
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="vertical" background-color="#fff"
          text-color="#000" active-text-color="#A4D1BE">
          <router-link to="/home/About">
            <el-menu-item index="1">关于我们</el-menu-item>
          </router-link>
          <router-link to="/home/main">
            <el-menu-item index="2">员工管理</el-menu-item>
          </router-link>
          <router-link to="/home/add">
            <el-menu-item index="3">员工入职</el-menu-item>
          </router-link>
          <router-link to="/home/Update">
            <el-menu-item index="4">信息更新</el-menu-item>
          </router-link>
          <router-link to="/home/Password">
            <el-menu-item index="5">修改密码</el-menu-item>
          </router-link>
          <el-menu-item index="6">
            <a href="https://mly66.github.io/blog/" target="_blank">联系作者</a>
          </el-menu-item>

        </el-menu>
      </el-aside>
      <el-container>
        <el-main><router-view></router-view></el-main>
        <el-footer>人事管理系统 ©2024 Created by Mly798798@163.com</el-footer>
      </el-container>
    </el-container>
  </el-container>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const activeIndex = ref('1');

// 从 localStorage 获取用户信息
const userInfo = ref(localStorage.getItem('userInfo') || '');

const tuichu = () => {
  router.push('/login');
  localStorage.removeItem('token');
  localStorage.removeItem('userInfo');
};
</script>

<style scoped>
.header {
  background-color: #7FBAA7;
  color: #ffffff;
  line-height: 60px;
}

.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
}

.user-info {
  color: #ffffff;
}

.el-aside {
  background-color: #fff;
  color: #333;
}

.el-main {
  background-color: #F7F7F7;
  color: #333;
}

.el-footer {
  background-color: #7FBAA7;
  color: #ffffff;
  text-align: center;
  line-height: 60px;
}

.el-menu a {
  text-decoration: none;
}

.el-menu-demo {
  height: 680px;
}

body>.el-container {
  margin-bottom: 40px;
}
</style>