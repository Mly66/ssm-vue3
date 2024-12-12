<template>
    <div class="show-admin-container">
      <div class="admin-details">
        <div class="avatar-box">
          <img :src="admin.picurl" alt="管理员头像" class="admin-avatar" />
        </div>
        <div class="admin-info">
          <p><strong>账号:</strong> {{ admin.account }}</p>
          <p><strong>角色:</strong> {{ roleText }}</p>
        </div>
      </div>
  
      <div class="file-upload-section">
        <label class="file-label">
          选择文件
          <input type="file" @change="handleFileChange" class="file-input" />
        </label>
        <button @click="submitImage" class="upload-button">上传图片</button>
        <button @click="updateAvatar" class="update-avatar-button">修改头像</button>
      </div>
  
      <button @click="goBack" class="back-button">返回</button>
    </div>
  </template>
  
  <script setup>
  import { ref, computed, onMounted } from 'vue';
  import { useRoute, useRouter } from 'vue-router';
  import { fetchAdminById, updateAdminById } from '../api/index';
  import { uploadImage } from '../api/imgurl';
  import { ElMessage } from 'element-plus';
  
  const route = useRoute();
  const router = useRouter();
  
  const admin = ref({
    account: '',
    password: '',
    role: 0,
    picurl: '',
  });
  
  const roleText = computed(() => {
    return admin.value.role === 0 ? '管理员' : '员工';
  });
  
  onMounted(() => {
    const userInfo = ref(localStorage.getItem('userInfo') || '');
    const account = userInfo._value.split(":")[1].trim(); 
    if (account) {
      fetchAdminById(account)
        .then(response => {
          const adminData = response.data[0];
          if (adminData) {
            admin.value = adminData;
          }
        })
        .catch(error => {
          console.error('管理员信息加载失败: ', error);
        });
    }
  });
  
  const selectedFile = ref(null);
  
  const handleFileChange = (event) => {
    selectedFile.value = event.target.files[0];
  };
  
  const submitImage = async () => {
    if (!selectedFile.value) {
      ElMessage.error('请先选择一个文件');
      return;
    }
  
    try {
      const url = await uploadImage(selectedFile.value);
      admin.value.picurl = url;
      ElMessage.success('图片上传成功');
    } catch (error) {
      console.error(error);
      ElMessage.error('图片上传失败');
    }
  };
  
  const updateAvatar = async () => {
    if (!admin.value.picurl) {
      ElMessage.error('请先上传头像');
      return;
    }
  
    try {
      await updateAdminById(admin.value);  
      ElMessage.success('头像更新成功');
    } catch (error) {
      ElMessage.error('头像更新失败');
    }
  };
  
  const goBack = () => {
    router.back();
  };
  </script>
  
  <style scoped>
  .show-admin-container {
    padding: 20px;
    max-width: 600px;
    margin: 0 auto;
    background-color: #f9f9f9;
    border-radius: 12px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  .admin-details {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    border-bottom: 2px solid #ececec;
    padding-bottom: 10px;
  }
  
  .avatar-box {
    width: 120px;
    height: 120px;
    border: 2px solid #007bff;
    border-radius: 50%;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
    background-color: #f0f0f0;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
  
  .admin-avatar {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
  }
  
  .admin-info p {
    margin: 5px 0;
    font-size: 16px;
    color: #333;
  }
  
  .file-upload-section {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    gap: 15px;
  }
  
  .file-label {
    font-size: 16px;
    background-color: #007bff;
    color: white;
    padding: 10px;
    border-radius: 4px;
    cursor: pointer;
    display: inline-block;
    text-align: center;
    transition: background-color 0.3s ease;
  }
  
  .file-input {
    display: none;
  }
  
  .file-label:hover {
    background-color: #0056b3;
  }
  
  .upload-button, .update-avatar-button, .back-button {
    padding: 10px 20px;
    font-size: 16px;
    border-radius: 8px;
    border: none;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  
  .upload-button {
    background-color: #007bff;
    color: white;
  }
  
  .upload-button:hover {
    background-color: #0056b3;
  }
  
  .update-avatar-button {
    background-color: #28a745;
    color: white;
  }
  
  .update-avatar-button:hover {
    background-color: #218838;
  }
  
  .back-button {
    background-color: #6c757d;
    color: white;
    margin-top: 20px;
  }
  
  .back-button:hover {
    background-color: #5a6268;
  }
  </style>
  