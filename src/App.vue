<script setup lang="ts">
import { ref } from "vue";
import zhCn from "element-plus/es/locale/lang/zh-cn.mjs";

const locale = ref(zhCn);
</script>

<template>
  <div id="app">
    <el-config-provider :locale="locale">
      <RouterView></RouterView>
    </el-config-provider>
  </div>
</template>

<style lang="less" scoped>
#app {
  height: 100vh;
  width: 100vw;
}
</style>
