<template>
  <div>
    <!-- 页头组件 -->
    <Header />
    <div class="log-container">
      <h2>志愿时长登记</h2>

      <!-- 表单 -->
      <form @submit.prevent="submitLog" class="log-form">

        <!-- 用户名 -->
        <div class="form-group">
          <label for="duration">用户名:</label>
          <input v-model="username" type = "text" id="username" required />
        </div>

        <!-- 时长 -->
        <div class="form-group">
          <label for="duration">时长（小时）:</label>
          <input v-model.number="duration" type="number" id="duration" required />
        </div>

        <!-- 日期 -->
        <div class="form-group">
          <label for="date">日期:</label>
          <input v-model="date" type="date" id="date" required />
        </div>

        <!-- 按钮组 -->
        <div class="button-group">
          <!-- 提交按钮 -->
          <button type="submit">提交</button>

          <!-- 取消按钮 -->
          <button type="button" @click="cancel">取消</button>
        </div>
      </form>

    </div>
  </div>
</template>

<script lang="ts">
import Header from '@/components/Header.vue';
import axios from 'axios';
export default {
  components: {
    Header,
  },
  name:'Log',
  data() {
    return {
      username: '', // 添加用户名字段
      duration: 0,
      date: '',
      showSuccess: false, // 控制成功提示框的显示
      showError: false,   // 控制失败提示框的显示
    };
  },
  methods: {
    async submitLog() {
      try {
        // 发送请求到后端保存数据
        const response = await axios.post('http://localhost:8688/log', {
          username: this.username,
          duration: this.duration,
          date: this.date,
        });

        console.log('成功提交志愿时长登记：', response.data);
        this.showSuccess = true; // 显示成功提示框
        this.resetForm();        // 重置表单
      } catch (error) {
        console.error('提交志愿时长登记失败：', error);
        this.showError = true;   // 显示失败提示框
      }
    },
    cancel() {
      // 取消按钮的点击事件，可以在这里添加返回首页的逻辑
      this.$router.push('/');
    },
    resetForm() {
      // 重置表单
      this.username = '';
      this.duration = 0;
      this.date = '';
      // 隐藏提示框
      setTimeout(() => {
        this.showSuccess = false;
        this.showError = false;
      }, 3000); // 3 秒后隐藏提示框
    },
  },
};
</script>

<style scoped>
.log-container {
  max-width: 400px;
  margin: 0 auto;
}

.log-form {
  background-color: #f8f8f8;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  font-weight: bold;
  margin-bottom: 5px;
}

input {
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  margin-bottom: 10px;
}

.button-group {
  display: flex;
  justify-content: left;;
}

button {
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-right: 10px;
}

button[type="submit"] {
  background-color: #4caf50;
  color: white;
}

button[type="button"] {
  background-color: #ccc;
  color: #fff;
}
</style>