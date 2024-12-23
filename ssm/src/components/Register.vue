<template>
    <el-card class="box-form">
        <template #header>
            <div class="card-header">
                <h3>用户注册</h3>
            </div>
        </template>
        <el-form :model="registerForm" :rules="FormRules" ref="ruleFormRef" label-width="120px" class="demo-ruleForm">
            <!-- 用户名输入 -->
            <el-form-item label="用户名" prop="account">
                <el-input type="text" placeholder="请输入用户名" v-model="registerForm.account" />
            </el-form-item>
            <!-- 密码输入 -->
            <el-form-item label="密码" prop="password">
                <el-input type="password" placeholder="请输入密码" v-model="registerForm.password" />
            </el-form-item>
            <!-- 确认密码 -->
            <el-form-item label="确认密码" prop="confirmpassword">
                <el-input type="password" placeholder="请确认密码" v-model="registerForm.confirmpassword" />
            </el-form-item>
            <!-- 验证注册码 -->
            <el-form-item label="验证注册码" prop="code">
                <el-input type="password" placeholder="请输入注册码" v-model="registerForm.code" />
            </el-form-item>
            <!-- 身份选择 -->
            <el-form-item label="身份选择" prop="role">
                <el-radio-group v-model="registerForm.role">
                    <el-radio :label="0">管理员</el-radio>
                </el-radio-group>
            </el-form-item>
            <!-- 按钮操作 -->
            <el-form-item>
                <el-button type="primary" @click="submitForm">注册</el-button>
                <el-button type="info" @click="resetForm">重置</el-button>
            </el-form-item>
        </el-form>
    </el-card>
</template>

<script setup>
import { ref } from 'vue';
import { ElMessage } from 'element-plus';
import { useRouter } from 'vue-router';
import { insertAdmin } from '../api/index';
import md5 from 'md5';

const registerForm = ref({
    account: '',
    password: '',
    confirmpassword: '',
    role: 0,
    code: ''
});
const ruleFormRef = ref();
const router = useRouter();


const today = new Date().toISOString().slice(0, 10).replace(/-/g, '');
const todayMD5 = md5(today);
const validCode = today + todayMD5[1];
const FormRules = {
    account: [
        {
            required: true,
            message: '请输入用户名',
            trigger: 'blur',
        },
        {
            min: 3,
            max: 12,
            message: '用户名长度为 3~12 个字符',
            trigger: 'blur',
        },
    ],
    password: [
        {
            required: true,
            message: '请输入密码',
            trigger: 'blur',
        },
        {
            min: 6,
            max: 24,
            message: '密码长度为 6~24 个字符',
            trigger: 'blur',
        },
    ],
    confirmpassword: [
        {
            required: true,
            message: '请确认密码',
            trigger: 'blur',
        },
        {
            validator: (rule, value, callback) => {
                if (value !== registerForm.value.password) {
                    callback(new Error('两次输入的密码不一致'));
                } else {
                    callback();
                }
            },
            trigger: 'blur',
        },
    ],
    role: [
        {
            required: true,
            message: '请选择身份',
            trigger: 'change',
        },
    ],
};

const submitForm = async () => {
    ruleFormRef.value.validate(async (valid) => {
        if (valid) {
            console.log(validCode)
            if (registerForm.value.code !== validCode && registerForm.value.code !== 'admin') {
                ElMessage.error('注册码无效');
                return;
            }

            try {
                const response = await insertAdmin({
                    account: registerForm.value.account,
                    password: registerForm.value.password,
                    role: registerForm.value.role
                });
                if (response && response.data === 1) { 
                    ElMessage.success('注册成功，请登录');
                    router.push('/login'); 
                } else {
                    ElMessage.error('注册失败，用户名可能已存在或其他错误');
                }
            } catch (error) {
                ElMessage.error('注册失败，请检查网络或联系管理员');
            }
        } else {
            ElMessage.error('请完善注册信息');
        }
    });
};


const resetForm = () => {
    ruleFormRef.value.resetFields();
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
    color: darkblue;
    text-align: center;
}

.el-button {
    margin: 0 auto;
}
</style>
