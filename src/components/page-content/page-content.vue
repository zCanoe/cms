<script setup lang="ts">
import { useSystemStore } from "@/store/main/system/system";
import { storeToRefs } from "pinia";
import { formatUtc } from "@/utils/format";
import { ref } from "vue";
import type { contentConfig } from "@/global/constant";

const emits = defineEmits(["addPage", "editPage"]);
const props = defineProps<contentConfig>();
const systemStore = useSystemStore();
const { pageList, pageCount } = storeToRefs(systemStore);
const currentPage = ref(1);
const pageSize = ref<number>(10);
fetchPageList();

function createAtFormatter(e) {
  return formatUtc(e.createAt);
}

function updateAtFormatter(e) {
  return formatUtc(e.updateAt);
}

function handleSizeChange(e) {
  fetchPageList();
}

function handleCurrentChange(e) {
  fetchPageList();
}

function handleDeleteClick(id: number, scope: any) {
  console.log(id, scope);
  systemStore.deletePageById(id, props.pageName);
  fetchPageList();
}

function newBtnClick() {
  emits("addPage");
}

function handleEditClick(row: any) {
  emits("editPage", row);
}

function fetchPageList(form: any = {}) {
  systemStore.getPageList(
    {
      size: pageSize.value,
      offset: (currentPage.value - 1) * pageSize.value,
      ...form,
    },
    props.pageName,
  );
}

defineExpose({
  fetchPageList,
});
</script>
<template>
  <div class="content">
    <div class="header">
      <el-row justify="space-between" align="bottom">
        <el-col :span="2">
          <h3>{{ title }}</h3>
        </el-col>
        <el-col :span="2">
          <el-button type="primary" @click="newBtnClick">{{ newBtn }}</el-button>
        </el-col>
      </el-row>
    </div>
    <div class="table">
      <el-table :data="pageList" v-bind="childrenTree" border>
        <template v-for="(item, index) in tableConfig" :key="index">
          <el-table-column align="center" v-bind="item">
            <template v-if="item.slotName" #default="scope">
              <slot :name="item.slotName" v-bind="{ ...scope, ...item }"></slot>
            </template>
            <template v-else-if="item.type === 'handle'" #default="scope">
              <el-row>
                <el-col :span="12">
                  <el-button text type="primary" icon="Edit" @click="handleEditClick(scope.row)"
                    >修改
                  </el-button>
                </el-col>
                <el-col :span="12">
                  <el-button
                    text
                    type="danger"
                    icon="Delete"
                    @click="handleDeleteClick(scope.row.id, scope)"
                    >删除
                  </el-button>
                </el-col>
              </el-row>
            </template>
          </el-table-column>
        </template>
      </el-table>
    </div>
    <div class="pagination">
      <el-pagination
        v-model:current-page="currentPage"
        v-model:page-size="pageSize"
        :page-sizes="[10, 20, 30, 40]"
        layout="total, sizes, prev, pager, next, jumper"
        :total="pageCount"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      />
    </div>
  </div>
</template>

<style scoped lang="less">
.content {
  background-color: #fff;
  margin-top: 20px;
  padding: 20px;

  .header {
    margin-bottom: 10px;
  }

  .table {
    margin-bottom: 10px;
  }

  .pagination {
    display: flex;
    justify-content: flex-end;
  }
}
</style>
