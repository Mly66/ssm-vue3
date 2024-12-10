<template>
	<!-- 登录表单模板 -->
	<el-card class="box-form">
	  <template #header>
		<!--标题 -->
		<div class="card-header">
		  <h3>信息管理系统</h3>
		</div>
	  </template>
	  <el-form :model="loginForm" :rules="FormRules" ref="ruleFormRef" label-width="120px" class="demo-ruleForm">
		<!-- 表单部分，包含用户名和密码输入字段 -->
		<el-form-item label="用户名" prop="username">
		  <!-- 用户名-->
		  <el-input type="text" placeholder="请输入用户名" v-model="loginForm.username" />
		</el-form-item>
		<el-form-item label="密&nbsp;&nbsp;&nbsp;码" prop="password">
		  <!-- 密码-->
		  <el-input v-model="loginForm.password" placeholder="请输入密码" type="password" />
		</el-form-item>
		<el-form-item>
		  <!-- 登录和重置按钮 -->
		  <el-button type="primary" @click="submitForm">登录</el-button>
		  <el-button @click="resetForm" type="info">重置</el-button>
		</el-form-item>
	  </el-form>
	</el-card>
  </template>
  
  <script setup>
  import { ElMessage } from 'element-plus';
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  
  // 定义响应式变量，包括登录表单、表单引用和路由
  const loginForm = ref({
	username: '',
	password: ''
  });
  const ruleFormRef = ref();
  const router = useRouter();
  
  // 提交表单的函数
  const submitForm = () => {
	ruleFormRef.value.validate((valid) => {
	  if (valid) {
		if (loginForm.value.username === 'admin' && loginForm.value.password === 'admin') {
		  localStorage.setItem('token', 'NBMLY');
		  ElMessage.success('登录成功');
		  // 使用 params 传递用户名
		  router.push({ path: '/home/welcome', params: { username: loginForm.value.username } });
		} else {
		  ElMessage.error('用户名或密码输入错误');
		  localStorage.removeItem('token');
		}
	  } else {
		ElMessage.error('请正确输入用户名和密码');
		return false;
	  }
	});
  };
  
  // 重置表单的函数
  const resetForm = () => {
	ruleFormRef.value.resetFields();
  };
  
  // 定义表单验证规则
  const FormRules = {
	username: [
	  {
		required: true,
		message: '请输入用户名',
		trigger: 'blur'
	  },
	  {
		min: 3,
		max: 12,
		message: '用户名长度为 3~12 个字符',
		trigger: 'blur'
	  }
	],
	password: [
	  {
		required: true,
		message: '请输入密码',
		trigger: 'blur'
	  },
	  {
		min: 5,
		max: 24,
		message: '密码长度为 6~24 个字符',
		trigger: 'blur'
	  }
	]
  };
  </script>
  
  <style scoped>
  /* 表单容器样式 */
  .box-form {
	width: 600px;
	margin: 200px auto;
	padding: 20px;/* 内边距*/
	background-color: #fff;
	border: 1px solid #fff;/* 边框宽度*/
	border-radius: 5px;	/* 边框圆角半径*/
	box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1); /* 盒子阴影效果 */
  }
  
  /* 头部标题样式 */
  h3 {
	color: darkred;
	text-align: center;
  }
  
  /* 按钮样式 */
  .el-button {
	margin: 0 auto;
  }
  </style>