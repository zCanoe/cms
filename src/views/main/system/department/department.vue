<template>
  <div class="department">
    <page-search :search-config="searchConfig"></page-search>
  </div>
</template>

<script setup lang="ts" name="department">
import PageSearch from "@/components/page-search/page-search.vue";
import searchConfig from "@/views/main/system/department/config/search.config";
</script>

<style scoped>
.department {
}
</style>
