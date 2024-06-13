<template>
  <div class="main">
    <h2>main</h2>
    {{ counterStore.count }} - {{ counterStore.getDoubleCount }}
    <button @click="counterStore.changeCounter(999)">修改counte</button>
  </div>
</template>

<script setup lang="ts">
import userCounterStore from "@/store/counter";

const counterStore = userCounterStore();
</script>

<style lang="less" scoped>
.main {
  color: red;
}
</style>
