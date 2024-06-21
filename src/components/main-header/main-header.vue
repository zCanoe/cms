<script setup lang="ts">
import { ref } from "vue";
import HeaderInfo from "@/components/main-header/c-cpns/header-info.vue";

const foldChange = defineEmits<{
  (e: "fold-change", value: boolean): void;
}>();
const fold = ref(false);

function handleFoldChange() {
  fold.value = !fold.value;
  foldChange("fold-change", fold.value);
}
</script>

<template>
  <div class="main-header">
    <div class="menu-icon" @click="handleFoldChange">
      <el-icon>
        <component :is="fold ? 'Fold' : 'Expand'" />
      </el-icon>
    </div>
    <div class="content">
      <div class="breadcrumb">面包屑</div>
      <div class="info">
        <header-info />
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
.main-header {
  display: flex;
  height: 100%;
  align-items: center;

  .menu-icon {
    display: flex;
    align-items: center;
    cursor: pointer;
  }

  .content {
    flex: 1;
    padding: 0 18px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
</style>
