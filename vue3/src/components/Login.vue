<template>
  <el-card class="box-form">
    <template #header>
      <div class="card-header">
        <h3>赛博人力智联</h3>
      </div>
    </template>
    <el-form :model="loginForm" :rules="FormRules" ref="ruleFormRef" label-width="120px" class="demo-ruleForm">
      <el-form-item label="用户名" prop="username">
        <el-input type="text" placeholder="请输入用户名" v-model="loginForm.username" />
      </el-form-item>
      <el-form-item label="密&nbsp;&nbsp;&nbsp;码" prop="password">
        <el-input v-model="loginForm.password" placeholder="请输入密码" type="password" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm">登录</el-button>
        <el-button @click="resetForm" type="info">重置</el-button>
        <el-button @click="goToRegister" type="message">没有账号? 注册</el-button>
      </el-form-item>
    </el-form>
  </el-card>
</template>

<script setup>
import { ElMessage } from 'element-plus';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { tryPassword } from '../api/index';

const loginForm = ref({
  username: '',
  password: '',
  role: 0 
});
const ruleFormRef = ref();
const router = useRouter();

const isAllDigits = (str) => /^\d+$/.test(str);

const submitForm = async () => {
  ruleFormRef.value.validate(async (valid) => {
    if (valid) {
      if (isAllDigits(loginForm.value.username)) {
        loginForm.value.role = 1;
      } else {
        loginForm.value.role = 0;
      }

      localStorage.setItem('userInfo', `${loginForm.value.role === 0 ? '管理员' : '员工'}:${loginForm.value.username}`);
      
      try {
        const response = await tryPassword({
          account: loginForm.value.username,
          password: loginForm.value.password,
          role: loginForm.value.role 
        });
        if (response && response.data === 1) { 
          localStorage.setItem('token', 'NBMLY'); 
          ElMessage.success('登录成功');
          if (loginForm.value.role === 0) {
            router.push({ path: `/home/welcome/${loginForm.value.username}` });
          } else {
            router.push({ path: `/home/welcome/${loginForm.value.username}` });
          }
        } else {
          ElMessage.error('用户名或密码错误');
        }
      } catch (error) {
        ElMessage.error('登录失败，请检查网络或联系管理员');
      }
    } else {
      ElMessage.error('请正确输入用户名和密码');
    }
  });
};

const resetForm = () => {
  ruleFormRef.value.resetFields();
};

const goToRegister = () => {
  router.push({ path: '/register' });
};

const FormRules = {
  username: [
    {
      required: true,
      message: '请输入用户名',
      trigger: 'blur'
    },
    {
      min: 3,
      max: 24,
      message: '用户名长度为 3~24 个字符',
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
.box-form {
  width: 600px;
  margin: 200px auto;
  padding: 20px;
  background-color: #fff;
  border: 1px solid #fff;
  border-radius: 5px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}

h3 {
  color: darkred;
  text-align: center;
}

.el-button {
  margin: 0 auto;
}
</style>
