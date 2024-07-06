<template>
  <div class="menu">
    <page-content v-bind="contentConfigs">
      <template #updateAt="{ row }">
        {{ formatUtc(row.updateAt) }}
      </template>
      <template #createAt="{ row }">
        {{ formatUtc(row.createAt) }}
      </template>
    </page-content>
  </div>
</template>

<script setup lang="ts" name="menu">
import PageContent from "@/components/page-content/page-content.vue";
import { contentConfigs } from "@/views/main/system/menu/config/content.config";
import { formatUtc } from "../../../../utils/format";
</script>

<style scoped>
.menu {
}
</style>
