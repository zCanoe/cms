<script setup lang="ts">
import { useSystemStore } from "@/store/main/system/system";
import { storeToRefs } from "pinia";
import { formatUtc } from "@/utils/format";
import { ref } from "vue";

const emits = defineEmits(["addUser", "editUser"]);
const systemStore = useSystemStore();
const { usersList, usersCount } = storeToRefs(systemStore);
const currentPage = ref(1);
const pageSize = ref<number>(10);
fetchUserList();

function createAtFormatter(e) {
  return formatUtc(e.createAt);
}

function updateAtFormatter(e) {
  return formatUtc(e.updateAt);
}

function handleSizeChange(e) {
  fetchUserList();
}

function handleCurrentChange(e) {
  fetchUserList();
}

function handleDeleteClick(id: number, scope: any) {
  console.log(id, scope);
  systemStore.deleteUserById(id, scope?.$index);
  fetchUserList();
}

function newBtnClick() {
  emits("addUser");
}

function handleEditClick(row: any) {
  emits("editUser", row);
}

function fetchUserList(form: any = {}) {
  systemStore.getUserList({
    size: pageSize.value,
    offset: (currentPage.value - 1) * pageSize.value,
    ...form,
  });
}

defineExpose({
  fetchUserList,
});
</script>
<template>
  <div class="content">
    <div class="header">
      <el-row justify="space-between" align="bottom">
        <el-col :span="2">
          <h3>用户列表</h3>
        </el-col>
        <el-col :span="2">
          <el-button type="primary" @click="newBtnClick">新建用户</el-button>
        </el-col>
      </el-row>
    </div>
    <div class="table">
      <el-table :data="usersList" border>
        <el-table-column align="center" type="selection" label="" width="55" />
        <el-table-column align="center" type="index" label="序号" width="55" />
        <el-table-column align="center" prop="name" label="用户名" width="100" />
        <el-table-column align="center" prop="realname" label="真实姓名" width="120" />
        <el-table-column align="center" prop="cellphone" sortable label="电话号码" width="150" />
        <el-table-column align="center" prop="enable" label="状态" width="100">
          <template #default="{ row }">
            <el-button plain :type="row.enable ? 'primary' : 'info'"
              >{{ row?.enable ? "启用" : "禁用" }}
            </el-button>
          </template>
        </el-table-column>
        <el-table-column
          align="center"
          prop="createAt"
          sortable
          label="创建时间"
          :formatter="createAtFormatter"
        />
        <el-table-column
          align="center"
          prop="updateAt"
          sortable
          label="更新时间"
          :formatter="updateAtFormatter"
        />
        <el-table-column align="center" label="操作" width="150">
          <template #default="scope">
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
      </el-table>
    </div>
    <div class="pagination">
      <el-pagination
        v-model:current-page="currentPage"
        v-model:page-size="pageSize"
        :page-sizes="[10, 20, 30, 40]"
        layout="total, sizes, prev, pager, next, jumper"
        :total="usersCount"
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
