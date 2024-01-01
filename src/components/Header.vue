<template>
    <header class="header">
      <div class="container">
        <!-- 左侧Logo和网站名 -->
        <div class="logo-container">
          <img src="@/assets/icon.png" alt="Logo" class="logo" />
          <h1 class="site-name">心链志愿</h1>
        </div>
        
        <!-- 右侧其他内容（如果有） -->
        <!-- 在这里你可以添加其他页头元素，例如导航链接等 -->
      </div>
    </header>
  </template>

<script lang="ts">
export default {
    name: 'Header',
}
</script>
  
  
  <style scoped>
  .header {
    background-color: #64a8f6fc; /* 天蓝色背景 */
    padding: 10px 0; /* 上下边距 */
  }
  
  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 95%;
    margin: 0 auto;
    height: 60px;
  }
  
  .logo-container {
    display: flex;
    align-items: center;
  }
  
  .logo {
    width: 40px; /* 根据实际Logo大小调整 */
    margin-right: 10px;
  }
  
  .site-name {
    font-size: 1.5em; /* 根据实际需要调整字体大小 */
    color: #fff; /* 白色字体 */
    margin: 0;
  }
  </style>
  