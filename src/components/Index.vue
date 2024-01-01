<template>
    <div class="hero-section">
        <!-- Background Image with Blue Overlay -->
        <div class="background-overlay"></div>
        <div class="content-container">
            <!-- White Logo -->
            <img src="@/assets/icon.png" alt="Logo" class="white-logo" />
            <!-- Main Title -->
            <h2 class="main-title"><span style="font-weight:700">心链</span> · 志愿</h2>
            <!-- Subtitle -->
            <p class="subtitle">基于智能合约的志愿服务平台</p>
        </div>
    </div>

    <p class="intro">在这里，你可以…… </p>
    <!-- Card Section -->
    <div class="card-section">
        <!-- Card 1 -->
        <div class="card" style="background-color: #64a8f6fc;">
            <div class="card-content">
            <div class="icon">
                <!-- Left Icon Goes Here -->
                <img src="@/assets/register.png" alt="Left Icon" />
            </div>
            <div class="text">
                <h2 style="color: white;">注册志愿者身份</h2>
                <p style="color: white;">我们会将志愿者信息登记上链，并为你提供唯一志愿者标识代码</p>
                <router-link to="/register" style="color: white;">>> 立即注册</router-link>
            </div>
            </div>
        </div>

        <!-- Card 2 -->
        <div class="card">
            <div class="card-content">
            <div class="icon">
                <!-- Left Icon Goes Here -->
                <img src="@/assets/log.png" alt="Left Icon" />
            </div>
            <div class="text">
                <h2>登记志愿时长</h2>
                <p>你的每一次志愿活动时长均登记在链上，不可篡改、不可删除</p>
                <router-link to="/log" style="color: black">>> 前往登记</router-link>
            </div>
        </div>
    </div>

    <!-- Card 3 -->
    <div class="card-section">
        <div class="card" style="background-color: #64a8f6fc;">
            <div class="card-content">
            <div class="icon">
                <!-- Left Icon Goes Here -->
                <img src="@/assets/certificate.png" alt="Left Icon" />
            </div>
            <div class="text">
                <h2 style="color: white;">申领志愿证书</h2>
                <p style="color: white;">满足一定志愿时长，我们会为你颁发独一无二的志愿证书</p>
                <router-link to="/apply" style="color: white;">>> 前往申领</router-link>
            </div>
            </div>
        </div>

        <!-- Card 4 -->
        <div class="card">
            <div class="card-content">
            <div class="icon">
                <!-- Left Icon Goes Here -->
                <img src="@/assets/person.png" alt="Left Icon" />
            </div>
            <div class="text">
                <h2>查看志愿信息</h2>
                <p>查看个人志愿时长、志愿证书状态</p>
                <router-link to="/person"  style="color: black">>> 前往查看</router-link>
            </div>
            </div>
        </div>
    </div>
      <!-- Add more cards as needed -->
    </div>
</template>

<script lang="ts">
export default {
    name: 'Index',
    // Your component logic goes here
}
</script>

<style scoped>
/* Add your custom styles here */
.hero-section {
  position: relative;
  height: 60vh; /* Adjust the height as needed */
  background: url('@/assets/zstx.jpg') center/cover no-repeat;
}

.intro {
    font-size: 1.5em; /* Adjust the font size of the intro */
    color: #000000; /* Adjust the color of the intro */
    margin-bottom: 10px; /* Add spacing between intro and title */
    justify-content: center;
    text-align: center;
    margin-top: 60px;
    margin-bottom: 40px;
    font-family:"Nunito",sans-serif;
    font-weight:400;
}

.card-section {
    width: 100%;
    display:flex;
    flex-wrap:wrap;
    margin: auto;
    justify-content: center;
}

.card {
    width: 40%;
  border-radius: 10px; /* Add border-radius for rounded corners */
  overflow: hidden; /* Ensure content inside the card doesn't overflow */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.0); /* Add shadow for better visibility */
  padding: 30px;
  border: 1px solid rgb(242, 242, 242);
  margin: 15px;
}

.card-content {
  display: flex;
  padding: 20px;
}

.icon img {
  width: 40px; /* Adjust the size of the icon */
  margin-right: 10px; /* Add spacing between icon and text */
}

.text {
  flex-grow: 1; /* Allow text to take remaining space */
  word-wrap: break-word;
}

/* Title Styles */
.text h2 {
  font-size: 1.2em; /* Adjust the font size of the title */
  margin-bottom: 5px; /* Add spacing between title and description */
}

/* Description Styles */
.text p {
  font-size: 1em; /* Adjust the font size of the description */
  color: #555; /* Adjust the color of the description */
}


.background-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity:0.7;
  background: #288cff; /* Adjust the color and opacity of the overlay */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
}
/* Content Container Styles */
.content-container {
  position: absolute;
  top: 50%; /* Adjust as needed */
  left: 50%; /* Adjust as needed */
  transform: translate(-50%, -50%);
  text-align: center;
}

/* Logo Styles */
.white-logo {
  width: 200px; /* Adjust the size of the logo */
}

/* Main Title Styles */
.main-title {
  font-family:"Nunito",sans-serif;
  font-weight:400;
  font-size: 2.8em; /* Adjust the font size of the main title */
  color: #ffffff; /* Adjust the color of the main title */
  margin-bottom: 10px; /* Add spacing between title and subtitle */
}

/* Subtitle Styles */
.subtitle {
  font-size: 1.0em; /* Adjust the font size of the subtitle */
  color: #ffffff; /* Adjust the color of the subtitle */
  line-height:1.8;
  font-size:1.09375rem;
  font-weight:300
}
</style>
