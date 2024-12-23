<template>
    <div>
      <input type="file" @change="handleFileChange" />
      <button @click="submitImage">上传图片</button>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { uploadImage } from '../api/imgurl';
  
  const selectedFile = ref(null);
  
  const handleFileChange = (event) => {
    selectedFile.value = event.target.files[0];
  };
  
  const submitImage = async () => {
    if (!selectedFile.value) {
      alert('请先选择一个文件');
      return;
    }
  
    try {
      const url = await uploadImage(selectedFile.value);
      alert(`图片上传成功，URL: ${url}`);
    } catch (error) {
      alert('图片上传失败');
    }
  };
  </script>
  
  <style scoped>
  
  </style>
  