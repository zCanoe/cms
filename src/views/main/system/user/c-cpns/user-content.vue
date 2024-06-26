<script setup lang="ts">
import { useSystemStore } from "@/store/main/system/system";
import { storeToRefs } from "pinia";

const systemStore = useSystemStore();
systemStore.getUserList();

const { usersList, usersCount } = storeToRefs(systemStore);
console.log(usersList.value);
</script>
<template>
  <div class="content">
    <div class="header">
      <el-row justify="space-between" align="bottom">
        <el-col :span="2">
          <h3>用户列表</h3>
        </el-col>
        <el-col :span="2">
          <el-button type="primary">新建用户</el-button>
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
        <el-table-column align="center" prop="enable" sortable label="状态" width="80" />
        <el-table-column align="center" prop="createAt" sortable label="创建时间" />
        <el-table-column align="center" label="操作" width="150">
          <el-row>
            <el-col :span="12">
              <el-button text type="primary" icon="Edit">修改</el-button>
            </el-col>
            <el-col :span="12">
              <el-button text type="danger" icon="Delete">删除</el-button>
            </el-col>
          </el-row>
        </el-table-column>
      </el-table>
    </div>
    <div class="pagination">分页</div>
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
}
</style>
