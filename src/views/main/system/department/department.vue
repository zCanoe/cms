<template>
  <div class="department">
    <page-search
      :search-configs="searchConfigs"
      @search-click="handleSearchClick"
      @reset-click="handleResetClick"
    ></page-search>
    <page-content
      ref="contentEl"
      v-bind="contentConfigs"
      @add-page="handleAddPage"
      @edit-page="handleEditPage"
    >
      <template #createAt="scope">
        {{ formatUtc(scope.row.createAt) }}
      </template>
    </page-content>
    <page-modal
      ref="modalEl"
      v-bind="modalConfigs"
      @page-add="contentEl?.fetchPageList"
      @page-edit="contentEl?.fetchPageList"
    >
      <template #parentId="{ form, prop }">
        <el-select v-model="form[prop]" placeholder="请选择上级部门">
          <template v-for="option in parentId" :key="option.id">
            <el-option :label="option.label" :value="option.value"></el-option>
          </template>
        </el-select>
      </template>
    </page-modal>
  </div>
</template>

<script setup lang="ts" name="department">
import PageSearch from "@/components/page-search/page-search.vue";
import searchConfigs from "@/views/main/system/department/config/search.config";
import PageContent from "@/components/page-content/page-content.vue";
import { contentConfigs } from "@/views/main/system/department/config/search.config";
import { contentEl, handleSearchClick, handleResetClick } from "@/hooks/usePageContent";
import { formatUtc } from "@/utils/format";
import PageModal from "@/components/page-modal/page-modal.vue";
import { modalConfigs } from "@/views/main/system/department/config/search.config";
import { modalEl, handleEditPage, handleAddPage } from "@/hooks/usePageModal";
import useMainStore from "@/store/main/main";
import { computed } from "vue";

const mainStore = useMainStore();
const parentId = computed(() => {
  return mainStore.entireDepartments?.map((item: any) => ({
    id: item.id,
    label: item.name,
    value: item.id,
  }));
});
</script>

<style scoped>
.department {
}
</style>
