<template>
  <div class="role">
    <page-search
      :search-configs="searchConfigs"
      @reset-click="handleResetClick"
      @search-click="handleSearchClick"
    ></page-search>
    <page-content
      ref="contentEl"
      v-bind="contentConfigs"
      @add-page="handleAddPage(newCb)"
      @edit-page="handleEditPage($event)"
    >
      <template #updateAt="{ row }">
        {{ formatUtc(row.updateAt) }}
      </template>
      <template #createAt="{ row }">
        {{ formatUtc(row.createAt) }}
      </template>
    </page-content>
    <page-modal ref="modalEl" v-bind="modalConfigs">
      <template #menuList="{ form, prop }">
        <el-tree
          ref="treeEl"
          :data="entireMenus"
          show-checkbox
          node-key="id"
          :default-checked-keys="mapMenuListToIds(form[prop])"
          :props="{ children: 'children', label: 'name' }"
          @check="(event1, event2) => handleCheck(form, prop, event1, event2)"
        ></el-tree>
      </template>
    </page-modal>
  </div>
</template>

<script setup lang="ts" name="role">
import PageContent from "@/components/page-content/page-content.vue";
import { contentConfigs } from "@/views/main/system/role/config/content.config";
import { formatUtc } from "../../../../utils/format";
import PageSearch from "@/components/page-search/page-search.vue";
import { searchConfigs } from "@/views/main/system/role/config/search.config";
import PageModal from "@/components/page-modal/page-modal.vue";
import { modalConfigs } from "@/views/main/system/role/config/modal.config";

import { contentEl, handleSearchClick, handleResetClick } from "@/hooks/usePageContent";
import { modalEl, handleEditPage, handleAddPage } from "@/hooks/usePageModal";
import useMainStore from "@/store/main/main";
import { storeToRefs } from "pinia";
import { mapMenuListToIds } from "@/utils/map-menus";
import { ElTree } from "element-plus";
import { ref } from "vue";

const mainStore = useMainStore();
const { entireMenus } = storeToRefs(mainStore);
const treeEl = ref<InstanceType<typeof ElTree>>();

function newCb(): void {
  treeEl.value?.setCheckedKeys([]);
}

function handleCheck(form: any, prop: any, event1: any, event2: any) {
  form[prop] = [...event2.checkedKeys, ...event2.halfCheckedKeys];
}
</script>

<style scoped>
.role {
}
</style>
