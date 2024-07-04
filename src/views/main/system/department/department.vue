<template>
  <div class="department">
    <page-search :search-configs="searchConfigs"></page-search>
    <page-content v-bind="contentConfigs">
      <template #createAt="scope">
        {{ formatUtc(scope.createAt) }}
      </template>
    </page-content>
  </div>
</template>

<script setup lang="ts" name="department">
import PageSearch from "@/components/page-search/page-search.vue";
import searchConfigs from "@/views/main/system/department/config/search.config";
import PageContent from "@/components/page-content/page-content.vue";
import { contentConfigs } from "@/views/main/system/department/config/search.config";
import { formatUtc } from "../../../../utils/format";
</script>

<style scoped>
.department {
}
</style>
