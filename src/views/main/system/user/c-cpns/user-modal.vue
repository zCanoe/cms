<script setup lang="ts">
import { reactive, ref } from "vue";
import useMainStore from "@/store/main/main";
import { storeToRefs } from "pinia";
import { useSystemStore } from "@/store/main/system/system";

const mainStore = useMainStore();
const systemStore = useSystemStore();
const { entireDepartments, entireRoles } = storeToRefs(mainStore);
const centerDialogVisible = ref<boolean>(false);
let formData = reactive({
  name: "",
  realname: "",
  password: "",
  cellphone: "",
  roleId: "",
  departmentId: "",
});
const isNew = ref(true);
const emits = defineEmits(["addUser", "editUser"]);

function setVisible(
  newModal: boolean = true,
  data: any = {
    name: "",
    realname: "",
    password: "",
    cellphone: "",
    roleId: "",
    departmentId: "",
  },
) {
  isNew.value = newModal;
  formData = reactive(JSON.parse(JSON.stringify(data)));
  centerDialogVisible.value = true;
}

async function handleConfirmClick() {
  centerDialogVisible.value = false;
  if (isNew.value) {
    await systemStore.newUserDataAction(formData);
    emits("addUser");
  } else {
    await systemStore.editUserAction(formData!.id, {
      name: formData.name,
      realname: formData.realname,
      password: formData.password,
      cellphone: formData.cellphone,
      roleId: formData.roleId,
      departmentId: formData.departmentId,
    });
    emits("editUser");
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
      :title="isNew ? '新建用户' : '编辑用户'"
      width="30%"
      align-center
    >
      <div class="form">
        <el-form v-model="formData" size="large" label-width="80">
          <el-form-item label="用户名" prop="name">
            <el-input v-model="formData.name" placeholder="请输入用户名"></el-input>
          </el-form-item>
          <el-form-item label="真实姓名" prop="realname">
            <el-input v-model="formData.realname" placeholder="请输入真实姓名"></el-input>
          </el-form-item>
          <el-form-item v-if="isNew" label="密码" prop="password">
            <el-input v-model="formData.password" placeholder="请输入密码" show-password></el-input>
          </el-form-item>
          <el-form-item label="电话号码" prop="cellphone">
            <el-input v-model="formData.cellphone" placeholder="请输入电话号码"></el-input>
          </el-form-item>
          <el-form-item label="选择角色" prop="roleId">
            <el-select v-model="formData.roleId" placeholder="请选择角色">
              <template v-for="item in entireRoles" :key="item.id">
                <el-option :label="item.name" :value="item.id" />
              </template>
            </el-select>
          </el-form-item>
          <el-form-item label="选择部门" prop="departmentId">
            <el-select v-model="formData.departmentId" placeholder="请选择部门">
              <template v-for="item in entireDepartments" :key="item.id">
                <el-option :label="item.name" :value="item.id" />
              </template>
            </el-select>
          </el-form-item>
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
