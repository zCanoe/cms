<script setup lang="ts">
import { reactive, ref } from "vue";
import { useSystemStore } from "@/store/main/system/system";
import type { modalConfig } from "@/global/constant";
import type { ElForm } from "element-plus";

const systemStore = useSystemStore();
const centerDialogVisible = ref<boolean>(false);
const isNew = ref(true);
const emits = defineEmits(["pageAdd", "pageEdit"]);
const props = defineProps<modalConfig>();
const elFormEl = ref<InstanceType<typeof ElForm>>();
const editData = ref({});
let formData = reactive(
  JSON.parse(
    JSON.stringify(
      props.formConfig.reduce((pre, cur) => {
        pre[cur.prop] = "";
        return pre;
      }, {}),
    ),
  ),
);

function setVisible(newModal: boolean = true, data: any = null) {
  isNew.value = newModal;
  editData.value = {};
  elFormEl.value?.resetFields();
  if (data && !isNew.value) {
    editData.value = data;
    for (const f in formData) {
      formData[f] = data[f];
    }
  }
  centerDialogVisible.value = true;
}

async function handleConfirmClick() {
  centerDialogVisible.value = false;
  if (isNew.value) {
    await systemStore.newPageDataAction(formData, props.pageName);
    emits("pageAdd");
  } else {
    await systemStore.editPageAction(editData.value!.id, formData, props.pageName);
    emits("pageEdit");
  }
}

defineExpose({
  setVisible,
});
</script>

<template>
  <div class="userModal">
    <el-dialog
      v-model="centerDialogVisible"
      :title="isNew ? `新建${title}` : `编辑${title}`"
      width="30%"
      align-center
    >
      <div class="form">
        <el-form ref="elFormEl" :model="formData" size="large" label-width="80">
          <template v-for="(item, index) in formConfig" :key="index">
            <el-form-item :label="item.label" :prop="item.prop" v-if="!item.slotName">
              <el-input v-model="formData[item.prop]" :placeholder="item.placeholder" />
            </el-form-item>
            <el-form-item :label="item.label" :prop="item.prop" v-else>
              <slot :name="item.slotName" :form="formData" :prop="item.prop"></slot>
            </el-form-item>
          </template>
        </el-form>
      </div>
      <template #footer>
        <div class="dialog-footer">
          <el-button @click="centerDialogVisible = false">取消</el-button>
          <el-button type="primary" @click="handleConfirmClick">确认</el-button>
        </div>
      </template>
    </el-dialog>
  </div>
</template>

<style scoped lang="less"></style>
