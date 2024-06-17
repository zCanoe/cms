<template>
  <div class="login">
    <login-panel></login-panel>
  </div>
</template>

<script setup lang="ts">
import LoginPanel from "@/views/login/c-cpns/login-panel.vue";
</script>

<style lang="less" scoped>
.login {
  width: inherit;
  height: inherit;
  display: flex;
  justify-content: center;
  align-items: center;
  background: url("../../assets/img/login-bg.svg");
}
</style>
