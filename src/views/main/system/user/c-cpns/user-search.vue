<script setup lang="ts" await>
import { reactive, ref } from "vue";
import type { ElForm } from "element-plus";

const searchForm = reactive({
  name: "",
  realname: "",
  cellphone: "",
  enable: 1,
  createAt: "",
});
// 此处如果用 elForm 会触发bug
const elForms = ref<InstanceType<typeof ElForm>>();

function handleResetClick() {
  elForms.value?.resetFields();
}

function handleSearchClick() {}
</script>

<template>
  <div class="search">
    <el-form ref="elForms" :model="searchForm" label-width="80px" size="large">
      <el-row :gutter="20">
        <el-col :span="8">
          <el-form-item label="用户名" prop="name">
            <el-input v-model="searchForm.name" placeholder="请输入查询用户名" />
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="真实姓名" prop="realname">
            <el-input v-model="searchForm.realname" placeholder="请输入查询真实姓名" />
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="电话号码" prop="cellphone">
            <el-input v-model="searchForm.cellphone" placeholder="请输入电话号码" />
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="状态" prop="enable">
            <el-select v-model="searchForm.enable" placeholder="请选择状态">
              <el-option label="启用" :value="1"></el-option>
              <el-option label="禁用" :value="0"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="创建时间" prop="createAt">
            <el-date-picker
              v-model="searchForm.createAt"
              type="daterange"
              start-placeholder="开始时间"
              end-placeholder="结束时间"
              range-separator="-"
            />
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>

    <el-row justify="end">
      <el-col :span="2">
        <el-button size="large" icon="Refresh" @click="handleResetClick">重置</el-button>
      </el-col>
      <el-col :span="2">
        <el-button size="large" type="primary" icon="Search" @click="handleSearchClick"
          >搜索
        </el-button>
      </el-col>
    </el-row>
  </div>
</template>

<style scoped lang="less">
.search {
  background-color: #fff;
  padding: 20px;

  .el-form-item {
    padding: 20px 30px;
    margin-bottom: 0;
  }
}
</style>
