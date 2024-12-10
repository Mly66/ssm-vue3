<template>
    <div class="edit-user-container">
      <el-form :model="userForm" ref="userForm" label-width="120px" class="edit-form">
        <el-form-item label="用户名" prop="userName">
          <el-input v-model="userForm.userName" />
        </el-form-item>
  
        <!-- 其他字段 -->
        <el-form-item label="卡类型" prop="cardType">
          <el-select v-model="userForm.cardType" placeholder="请选择卡类型">
            <el-option label="普通卡" value="普通卡" />
            <el-option label="VIP卡" value="VIP卡" />
          </el-select>
        </el-form-item>
  
        <el-form-item label="卡号" prop="cardNo">
          <el-input v-model="userForm.cardNo" />
        </el-form-item>
  
        <el-form-item label="性别" prop="userSex">
          <el-select v-model="userForm.userSex" placeholder="请选择性别">
            <el-option label="男" value="男" />
            <el-option label="女" value="女" />
          </el-select>
        </el-form-item>
  
        <el-form-item label="年龄" prop="userAge">
          <el-input v-model="userForm.userAge" type="number" />
        </el-form-item>
  
        <el-form-item label="角色" prop="userRole">
          <el-select v-model="userForm.userRole" placeholder="请选择角色">
            <el-option label="管理员" value="管理员" />
            <el-option label="普通用户" value="普通用户" />
          </el-select>
        </el-form-item>
  
        <el-button type="primary" @click="handleSubmit">提交</el-button>
      </el-form>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import { useRoute, useRouter } from 'vue-router';
  import { fetchUserById, updateUserById } from '@/api/index'; // 导入 updateUserById
  
  const route = useRoute();
  const router = useRouter();
  
  const userForm = ref({
    userName: '',
    cardType: '',
    cardNo: '',
    userSex: '',
    userAge: '',
    userRole: '',
  });
  
  onMounted(() => {
  const userId = route.query.userId;
  fetchUserById(userId).then(response => {
    const userData = response.data[0]; // 获取数组中的第一个元素
    if (userData) {
      userForm.value = {
        userName: userData.userName || '',
        cardType: userData.cardType || '',
        cardNo: userData.cardNo || '',
        userSex: userData.userSex || '',
        userAge: userData.userAge || '',
        userRole: userData.userRole || '',
      };
    }
  }).catch(error => {
    console.error("用户信息加载失败: ", error);
  });
});

  
  const handleSubmit = () => {
    updateUserById(userForm.value).then(() => {
      router.push({ name: 'main' });
    }).catch(error => {
      console.error("提交失败: ", error);
    });
  };
  </script>
  
  <style scoped>
  .edit-user-container {
    padding: 20px;
  }
  
  .edit-form {
    max-width: 600px;
    margin: 0 auto;
  }
  
  .el-form-item {
    margin-bottom: 20px;
  }
  
  .el-button {
    margin-top: 20px;
    width: 100%;
  }
  </style>
  