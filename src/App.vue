<template>
  <div class="content">
    <router-view></router-view>
  </div>
  <Footer></Footer>
</template>

<script lang="ts">
  import Index from './components/Index.vue';
  import Footer from './components/Foot.vue';
  export default {
    name: 'App',
    components: {
      Index,
      Footer,
    }
  }
</script>

<style scoped>
/* 为了使页脚固定在底部，设置相对定位 */
.content {
  min-height: calc(100vh - 100px); /* 确保内容占据至少整个视口高度减去页脚高度 */
  padding-bottom: 50px; /* 为了避免内容被页脚遮挡，设置底部内边距 */
  box-sizing: border-box;
}
</style>