<template>
    <Header />
    <div class="certificate-container">
      <h2>志愿证书申领</h2>
  
      <!-- 表单 -->
      <form @submit.prevent="submitApplication" class="certificate-form">
        <!-- 姓名 -->
        <div class="form-group">
          <label for="username">用户名:</label>
          <input v-model="username" type="text" id="username" required />
        </div>
  
        <!-- 提交按钮 -->
        <div class="button-group">
          <button type="submit">提交申请</button>
          <button type="button" @click="cancel">取消</button>
        </div>
      </form>
  
      <!-- 提示框 -->
      <div v-if="showSuccess" class="success-message">
        <p>证书申领成功！证书编号：{{ certificateNumber }}</p>
        <button @click="closeMessage">关闭</button>
      </div>
  
      <div v-if="showError" class="error-message">
        <p>证书申领失败，请重试。</p>
        <button @click="closeMessage">关闭</button>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import Header from '@/components/Header.vue';
  import axios from 'axios';
  export default {
    name: "Apply",
    components: {
      Header,
    },
    data() {
      return {
        username: '',
        showSuccess: false,
        showError: false,
        certificateNumber: '',
      };
    },
    methods: {
      async submitApplication() {
        try {
          const response = await axios.get(`http://localhost:8688/apply?username=${this.username}`);
          this.certificateNumber = response.data;
        } catch (error) {
          console.error('Error fetching user info:', error);
        }
      },
      showSuccessMessage(certificateNumber: string) {
        this.certificateNumber = certificateNumber;
        this.showSuccess = true;
      },
      showErrorMessage() {
        this.showError = true;
      },
      closeMessage() {
        this.showSuccess = false;
        this.showError = false;
      },
      cancel() {
        // 取消按钮的点击事件，返回首页或执行其他取消操作
        // 例如，可以使用 Vue Router 实现路由导航到首页
        this.$router.push('/');
      },
    },
  };
  </script>
  
  <style scoped>
  .certificate-container {
    max-width: 400px;
    margin: 20px auto;
  }
  
  .certificate-form {
    background-color: #f5f5f5;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    margin-bottom: 20px;
  }
  
  .form-group {
    margin-bottom: 15px;
  }
  
  label {
    display: block;
    font-weight: bold;
    margin-bottom: 5px;
  }
  
  input,
  textarea {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
    margin-bottom: 10px;
  }
  
  .button-group {
    display: flex;
    justify-content: space-between;
  }
  
  button {
    flex: 1;
    padding: 10px 15px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    margin-right: 5px;
  }
  
  /* 按钮样式 */
  button[type="submit"] {
    background-color: #4caf50;
    color: white;
  }
  
  button[type="button"] {
    background-color: #ccc;
    color: #333;
  }
  
  /* 提示框样式 */
  .success-message,
  .error-message {
    background-color: #d4edda;
    color: #155724;
    padding: 15px;
    border-radius: 4px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    margin-bottom: 20px;
  }
  
  .success-message button,
  .error-message button {
    background-color: #155724;
    color: #fff;
    border: none;
    padding: 8px 15px;
    border-radius: 4px;
    cursor: pointer;
  }
  </style>
  