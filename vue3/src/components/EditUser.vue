<template>
  <div class="edit-user-container">
    <form class="edit-form" @submit.prevent="handleSubmit">
      <div class="form-item">
        <label for="userName">用户名</label>
        <input id="userName" type="text" v-model="userForm.userName" placeholder="请输入用户名" />
      </div>
      <div class="form-item">
        <label for="cardType">证件类型</label>
        <input id="cardType" type="text" v-model="userForm.cardType" placeholder="请输入证件类型" />
      </div>
      <div class="form-item">
        <label for="cardNo">证件号码</label>
        <input id="cardNo" type="text" v-model="userForm.cardNo" placeholder="请输入证件号码" />
      </div>
      <div class="form-item">
        <label>性别</label>
        <div class="radio-group">
          <label>
            <input type="radio" value="男" v-model="userForm.userSex" /> 男
          </label>
          <label>
            <input type="radio" value="女" v-model="userForm.userSex" /> 女
          </label>
        </div>
      </div>
      <div class="form-item">
        <label for="userAge">年龄</label>
        <input id="userAge" type="number" v-model="userForm.userAge" min="0" />
      </div>
      <div class="form-item">
        <label for="userRole">角色</label>
        <input id="userRole" type="text" v-model="userForm.userRole" placeholder="请输入角色" />
      </div>
      <div class="form-item">
        <button type="submit" class="submit-button">提交</button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { fetchUserById, updateUserById } from '../api/index';

const route = useRoute();
const router = useRouter();

const userForm = ref({
  userName: '',
  cardType: '',
  cardNo: '',
  userSex: '',
  userAge: 18,
  userRole: '',
});
console.log(userForm.value);

onMounted(() => {
  const userId = route.query.userId;
  console.log(userId);
  fetchUserById(userId)
    .then(response => {
      const userData = response.data[0];
      console.log(userData);

      if (userData) {
        userForm.value = {
          userId: userId, // 添加 userId
          userName: userData.userName || '',
          cardType: userData.cardType || '',
          cardNo: userData.cardNo || '',
          userSex: userData.userSex || '',
          userAge: Number(userData.userAge) || 0,
          userRole: userData.userRole || '',
        };
        console.log(userForm.value);
      }
    })
    .catch(error => {
      console.error('用户信息加载失败: ', error);
    });
});

const handleSubmit = () => {
  updateUserById(userForm.value)
    .then(() => {
      router.push({ name: 'main' });
    })
    .catch(error => {
      console.error('提交失败: ', error);
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
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 10px;
  background-color: #f9f9f9;
}

.form-item {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}

.form-item label {
  width: 100px; /* 标签固定宽度 */
  text-align: right;
  margin-right: 10px;
  font-weight: bold;
}

.form-item input {
  flex: 1;
  padding: 10px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.radio-group {
  display: flex;
  gap: 10px;
}

.radio-group label {
  display: flex;
  align-items: center;
}

.radio-group input {
  margin-right: 5px;
}

.submit-button {
  width: 100%;
  padding: 10px;
  font-size: 16px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.submit-button:hover {
  background-color: #0056b3;
}
</style>
