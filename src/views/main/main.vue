<template>
  <div class="main">
    <el-container class="main-content">
      <el-aside width="210px">
        <main-menu></main-menu>
      </el-aside>
      <el-container>
        <el-header height="50px">Header</el-header>
        <el-main>Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import MainMenu from "@/components/main-menu/main-menu.vue";
</script>

<style lang="less" scoped>
.main {
  height: 100%;
  color: red;

  .main-content {
    height: 100%;

    .el-aside {
      overflow-x: hidden;
      overflow-y: auto;
      line-height: 200px;
      text-align: left;
      cursor: pointer;
      background-color: #001529;
      transition: width 0.3s linear;
      scrollbar-width: none; /* firefox */
      -ms-overflow-style: none; /* IE 10+ */

      &::-webkit-scrollbar {
        display: none;
      }
    }

    .el-main {
      color: #333;
      text-align: center;
      background-color: #f0f2f5;
    }
  }
}
</style>
