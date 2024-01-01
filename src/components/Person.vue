<template>
    <div>
      <Header />
      <div class="person-info">
        <h2 class="title">个人信息</h2>
  
        <!-- 输入框和按钮 -->
        <div class="input-container">
          <label for="usernameInput">输入用户名:</label>
          <input v-model="username" id="usernameInput" />
          <button @click="fetchUserInfo">获取用户信息</button>
        </div>
  
        <!-- 用户信息展示 -->
        <div v-if="Object.keys(userInfo).length > 0" class="info-container">
          <div class="info-item">
            <label>用户名:</label>
            <span>{{ userInfo.username }}</span>
          </div>
          <div class="info-item">
            <label>邮箱:</label>
            <span>{{ userInfo.email }}</span>
          </div>
          <div class="info-item">
            <label>区块链账户地址:</label>
            <span>{{ userInfo.blockchainAddress }}</span>
          </div>
          <div class="info-item">
            <label>志愿时长:</label>
            <span>{{ userInfo.volunteerHours }}</span>
           </div>
        <div class="info-item">
            <label>证书编号:</label>
            <span>{{ userInfo.certificateNumber }}</span>

        </div>
    </div>
  
        <!-- 私钥和按钮 -->
        <div v-if="Object.keys(userInfo).length > 0" class="info-container">
          <div class="info-item">
            <label v-if="showPrivateKey">私钥:</label>
            <span v-if="showPrivateKey" class="private-key">{{ userInfo.blockchainPrivateKey }}</span>
            <button @click="togglePrivateKeyVisibility">{{ showPrivateKey ? '隐藏私钥' : '显示私钥' }}</button>
          </div>
          <!-- 其他用户信息 ... -->
        </div>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import Header from '@/components/Header.vue';
  import axios from 'axios';
  
  export default {
    name: 'Person',
    components: {
      Header,
    },
    data() {
      return {
        username: '',
        userInfo: {
          username: '',
          email: '',
          blockchainAddress: '',
          blockchainPrivateKey: '',
          volunteerHours: 0,
          certificateNumber: '',
        },
        showPrivateKey: false,
      };
    },
    methods: {
      async fetchUserInfo() {
        try {
          const response = await axios.get(`http://localhost:8688/person?username=${this.username}`);
          this.userInfo = response.data;
        } catch (error) {
          console.error('Error fetching user info:', error);
        }
      },
      togglePrivateKeyVisibility() {
        this.showPrivateKey = !this.showPrivateKey;
      },
    },
  };
  </script>
  
  <style scoped>
  .person-info {
    max-width: 45%;
    margin: 40px auto;
    padding: 20px;
    border: 1px solid #ddd;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }
  
  .title {
    color: #007bff;
    text-align: center;
  }
  
  .info-item {
    margin: 10px;
  }
  
  label {
    font-weight: bold;
    margin-right: 10px;
  }
  
  .private-key {
    font-family: monospace;
    display: inline-block;
    padding: 5px;
    background-color: #f5f5f5;
    border: 1px solid #ddd;
    border-radius: 5px;
    margin-right: 10px;
  }
  
  button {
    cursor: pointer;
    background-color: #007bff;
    color: #fff;
    border: none;
    padding: 5px 10px;
    border-radius: 5px;
    font-size: 14px;
    margin-left: 10px;
  }
  
  /* 添加一些动画效果 */
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  
  .private-key {
    animation: fadeIn 1s ease-in-out;
  }
  </style>