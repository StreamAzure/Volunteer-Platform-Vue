<template>
    <div>
      <!-- 页头组件 -->
      <Header />
  
      <!-- 注册表单 -->
      <div class="container">
        <div class="register-form">
          <h2>注册</h2>
          <form @submit.prevent="submitForm">
            <label for="username">用户名：</label>
            <input type="text" id="username" v-model="username" required />
  
            <label for="email">邮箱：</label>
            <input type="email" id="email" v-model="email" required />
  
            <label for="password">密码：</label>
            <input type="password" id="password" v-model="password" required />
  
            <button type="submit">注册</button>
            <button type="button" @click="cancel">取消</button>
          </form>
        </div>
      </div>
  
      <!-- 页脚组件 -->
      <Footer />
    </div>
  </template>
  
  <script lang="ts">
  import Header from '@/components/Header.vue';
  import Footer from '@/components/Foot.vue';
  import axios from 'axios';
  
  export default {
    components: {
      Header,
      Footer,
    },
    data() {
      return {
        username: '',
        email: '',
        password: '',
      };
    },
    methods: {
      async submitForm() {
        try {
          // 构造要发送的数据
          const data = {
            username: this.username,
            email: this.email,
            password: this.password,
          };

          // 发送 POST 请求
          const response = await axios.post('http://localhost:8688/register', data);

          // 处理后端响应
          console.log('后端响应：', response.data);
        } catch (error) {
          // 处理请求错误
          console.error('请求失败：', error);
        }
      },
      cancel() {
        // 取消按钮的点击事件，可以在这里添加返回首页的逻辑
        this.$router.push('/');
      },
    },
  };
  </script>
  
  <style scoped>
  .container {
    max-width: 40%;
    margin: 20px auto;
  }
  
  .register-form {
    background-color: #f4f4f4;
    padding: 40px;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }
  
  h2 {
    color: #333;
  }
  
  form {
    display: flex;
    flex-direction: column;
  }
  
  label {
    margin-bottom: 8px;
    color: #555;
  }
  
  input {
    margin-bottom: 16px;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
  }
  
  button {
    padding: 12px;
    background-color: #007bff;
    color: #fff;
    border: none;
    cursor: pointer;
    border-radius: 4px;
    margin-bottom: 10px;
  }

  button[type="button"] {
    background-color: #ccc;
    color: #fff;
  }
  
  button[type="submit"]:hover {
    background-color: #0056b3;
  }

  button[type="button"]:hover {
    background-color: #b7b7b7;
  }
  </style>