<template>
    <div class="create-user-container">
      <el-form :model="ruleForm" :rules="rules" ref="userForm" label-width="100px">
        <el-form-item label="卡类型" prop="cardType">
          <el-select v-model="ruleForm.cardType" placeholder="请选择卡类型">
            <el-option label="身份证" value="身份证" />
            <el-option label="驾驶证" value="驾驶证" />
          </el-select>
        </el-form-item>
        <el-form-item label="卡号" prop="cardNo">
          <el-input v-model="ruleForm.cardNo" placeholder="请输入卡号" />
        </el-form-item>
        <el-form-item label="用户名" prop="userName">
          <el-input v-model="ruleForm.userName" placeholder="请输入用户名" />
        </el-form-item>
        <el-form-item label="性别" prop="userSex">
          <el-select v-model="ruleForm.userSex" placeholder="请选择性别">
            <el-option label="男" value="男" />
            <el-option label="女" value="女" />
          </el-select>
        </el-form-item>
        <el-form-item label="年龄" prop="userAge">
          <el-input-number v-model="ruleForm.userAge" :min="1" :max="150" placeholder="请输入年龄" />
        </el-form-item>
        <el-form-item label="角色" prop="userRole">
          <el-input v-model="ruleForm.userRole" placeholder="请输入角色" />
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="handleSubmit">提交</el-button>
          <el-button @click="resetForm">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </template>
  
  <script setup>
  import { ref, reactive } from 'vue';
  import { ElMessage } from 'element-plus';
  import { createUser } from '@/api/index';
  
  // 使用 ref 来定义 form 的引用
  const userForm = ref(null);
  
  // 定义表单数据
  const ruleForm = reactive({
    cardType: null,
    cardNo: null,
    userName: null,
    userSex: null,
    userAge: 18,
    userRole: null,
  });
  
  // 表单验证规则
  const rules = {
    cardType: [{ required: true, message: '请选择卡类型', trigger: 'change' }],
    cardNo: [{ required: true, message: '卡号不能为空', trigger: 'blur' }],
    userName: [{ required: true, message: '用户名不能为空', trigger: 'blur' }],
    userSex: [{ required: true, message: '请选择性别', trigger: 'change' }],
    userAge: [{ required: true, message: '请输入年龄', trigger: 'blur' }],
    userRole: [{ required: true, message: '请输入角色', trigger: 'blur' }],
  };
  
  const handleSubmit = () => {
  const form = ruleForm;

  userForm.value.validate((valid) => {
    if (valid) {
      // 提交表单数据
      createUser(form)
        .then((res) => {
          ElMessage.success('用户创建成功！');
          resetForm(); 
        })
        .catch((err) => {
          ElMessage.error('用户创建失败，请稍后重试！');
        });
    } else {
      ElMessage.warning('请填写完整的表单');
    }
  });
};

  // 重置表单
  const resetForm = () => {
    for (const key in ruleForm) {
      ruleForm[key] = null;
    }
  };
  </script>
  
  <style scoped>
  .create-user-container {
    padding: 20px;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
    max-width: 400px;
    margin: 0 auto;
  }
  </style>
  