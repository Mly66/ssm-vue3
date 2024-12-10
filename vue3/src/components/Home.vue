<template>
  <el-container style="height: 100vh;">
    <el-header>信息管理系统</el-header>
    <!--点击后调用 tuichu 方法 -->
    <el-button type="primary" @click="tuichu">退出</el-button>
    <!-- 嵌套侧边栏和主要内容 -->
    <el-container>
      <!-- 侧边栏组件 -->
      <el-aside width="200px">
        <!-- 菜单组件 -->
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="vertical" background-color="#fff"
          text-color="#000" active-text-color="#A4D1BE">
          <!-- 路由链接，点击后不同的页面 -->
          <router-link to="/home/main">
            <el-menu-item index="1"><el-icon>
                <HomeFilled />
              </el-icon>首页</el-menu-item></router-link>
          <router-link to="/home/add"><el-menu-item index="2"><el-icon>
                <Menu />
              </el-icon>添加信息</el-menu-item></router-link>
          <router-link to="/goods"><el-menu-item index="3"><el-icon>
                <Menu />
              </el-icon>分类管理</el-menu-item></router-link>
          <router-link to="/settings"><el-menu-item index="4"><el-icon>
                <Menu />
              </el-icon>商品管理</el-menu-item></router-link>
          <router-link to="/menu"><el-menu-item index="5"><el-icon>
                <User />
              </el-icon>个人中心</el-menu-item></router-link>
        </el-menu>
      </el-aside>
      <!-- 容器组件，嵌套主要内容区域 -->
      <el-container>
        <!-- 主要内容区域，当前路由对应的组件 -->
        <el-main><router-view></router-view></el-main>
        <el-footer>信息管理系统 ©2024 Created by Mly798798@163.com</el-footer>
      </el-container>
    </el-container>
  </el-container>
</template>

<script setup>
import { reactive, ref } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter();
const tuichu = () => {
  router.push('/login');
  localStorage.removeItem('token');
};
</script>

<style scoped>
/* 头部*/
.el-header {
  background-color: #7FBAA7;
  color: #ffffff;
  text-align: left;
  line-height: 60px;
}

/* 退出按钮 */
.el-button {
  position: absolute;
  top: 15px;
  right: 50px;
}

/* 侧边栏 */
.el-aside {
  background-color: #fff;
  color: #333;
}

/* 主要内容区域*/
.el-main {
  background-color: #F7F7F7;
  color: #333;
}

/* 页脚 */
.el-footer {
  background-color: #7FBAA7;
  /* 设置与头部相同的背景颜色 */
  color: #ffffff;
  text-align: center;
  line-height: 60px;
  /* 根据需要调整高度 */
}

/* 移除下划线 */
.el-menu a {
  text-decoration: none;
}

/* 演示样式*/
.el-menu-demo {
  height: 680px;
}

body>.el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>