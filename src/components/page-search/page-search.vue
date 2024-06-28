<script setup lang="ts" await>
import { computed, reactive, ref } from "vue";
import type { ElForm } from "element-plus";

interface prop {
  searchConfig: {
    name: string;
    prop: string;
    type: string;
    label: string;
    placeholder?: string;
    option?: Array<{ label: string; value: any }>;
  }[];
}

const emits = defineEmits(["searchClick", "resetClick"]);
const props = defineProps<prop>();
// 此处如果用 elForm 会触发bug
const elForms = ref<InstanceType<typeof ElForm>>();
// 根据传入的config生成form
const searchForm = computed(() =>
  props.searchConfig.reduce((pre, cur) => (pre[cur.name] = ""), {}),
);

function handleResetClick() {
  elForms.value?.resetFields();
  emits("resetClick", () => {});
}

function handleSearchClick() {
  emits("searchClick", searchForm);
}
</script>

<template>
  <div class="search">
    <el-form ref="elForms" :model="searchForm" label-width="80px" size="large">
      <el-row :gutter="20">
        <template v-for="(item, index) in searchConfig" :key="index">
          <el-col v-if="item.type === 'input'" :span="8">
            <el-form-item :label="item.label" :prop="item.prop">
              <el-input v-model="searchForm[item.name]" :placeholder="item.placeholder" />
            </el-form-item>
          </el-col>
          <el-col v-if="item.type === 'data-picker'" :span="8">
            <el-form-item :label="item.label" :prop="item.prop">
              <el-date-picker
                v-model="searchForm[item.name]"
                type="daterange"
                start-placeholder="开始时间"
                end-placeholder="结束时间"
                range-separator="-"
              />
            </el-form-item>
          </el-col>
          <el-col v-if="item.type === 'select'" :span="8">
            <el-form-item :label="item.label" :prop="item.prop">
              <el-select v-model="searchForm[item.name]" :placeholder="item.placeholder">
                <template v-for="(op, i) in item.option" :key="i">
                  <el-option :label="op.label" :value="op.value"></el-option>
                </template>
              </el-select>
            </el-form-item>
          </el-col>
        </template>
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
