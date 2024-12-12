<template>
    <div class="change-password-container">
      <el-form :model="admin" label-width="120px">
        <el-form-item label="原密码" :rules="[{ required: true, message: '请输入原密码', trigger: 'blur' }]">
          <el-input v-model="admin.oldPassword" type="password" placeholder="请输入原密码"></el-input>
        </el-form-item>
        <el-form-item label="新密码" :rules="[{ required: true, message: '请输入新密码', trigger: 'blur' }]">
          <el-input v-model="admin.newPassword" type="password" placeholder="请输入新密码"></el-input>
        </el-form-item>
        <el-form-item label="确认新密码" :rules="[{ required: true, message: '请确认新密码', trigger: 'blur' }]">
          <el-input v-model="admin.confirmPassword" type="password" placeholder="请再次输入新密码"></el-input>
        </el-form-item>
        <el-button type="primary" @click="updatePassword">更新密码</el-button>
        <el-button @click="goBack">返回</el-button>
      </el-form>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import { useRoute, useRouter } from 'vue-router';
  import { fetchAdminById, updateAdminById } from '../api/index';
  import { ElMessage } from 'element-plus';
  
  const router = useRouter();
  
  const admin = ref({
    account: '',
    oldPassword: '',
    newPassword: '',
    confirmPassword: '',
    role: 0,
    picurl: '',
  });
  
  onMounted(() => {
    const userInfo = ref(localStorage.getItem('userInfo') || '');
    const account = userInfo._value.split(":")[1].trim();
    if (account) {
      fetchAdminById(account)
        .then(response => {
          const adminData = response.data[0];
          if (adminData) {
            admin.value.account = adminData.account;
            admin.value.picurl = adminData.picurl;
          }
        })
        .catch(error => {
          console.error('管理员信息加载失败: ', error);
        });
    }
  });
  
  const updatePassword = async () => {
    if (admin.value.newPassword !== admin.value.confirmPassword) {
      ElMessage.error('新密码和确认密码不一致');
      return;
    }
  
    try {
      await updateAdminById({
        account: admin.value.account,
        password: admin.value.newPassword,
        role: admin.value.role,
        picurl: admin.value.picurl,
      });
      ElMessage.success('密码更新成功');
      router.push('/login');
    } catch (error) {
      ElMessage.error('密码更新失败');
    }
  };
  
  const goBack = () => {
    router.back();
  };
  </script>
  
  <style scoped>
  .change-password-container {
    margin: 20px;
  }
  
  .el-form-item {
    margin-bottom: 20px;
  }
  
  .el-button {
    margin-top: 20px;
    margin-right: 10px;
  }
  </style>
  