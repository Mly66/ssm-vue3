<template>
  <el-container style="height: 100vh;">
    <el-header>人事管理系统</el-header>
    <el-button type="primary" @click="tuichu">退出</el-button>
    <el-container>
      <el-aside width="200px">
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="vertical" background-color="#fff"
          text-color="#000" active-text-color="#A4D1BE">
          <router-link to="/home/main">
            <el-menu-item index="1">首页</el-menu-item>
          </router-link>
          <router-link to="/home/add">
            <el-menu-item index="2">添加信息</el-menu-item>
          </router-link>
          <router-link to="/home">
            <el-menu-item index="3">分类管理</el-menu-item>
          </router-link>
          <router-link to="/home">
            <el-menu-item index="4">商品管理</el-menu-item>
          </router-link>
          <el-menu-item index="5">
            <a href="https://mly66.github.io/blog/" target="_blank">联系我们</a>
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

const tuichu = () => {
  router.push('/login');
  localStorage.removeItem('token');
};
</script>

<style scoped>
.el-header {
  background-color: #7FBAA7;
  color: #ffffff;
  text-align: left;
  line-height: 60px;
}

.el-button {
  position: absolute;
  top: 15px;
  right: 50px;
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