<script setup lang="ts">
import { reactive, ref, toRaw } from "vue";
import { ElMessage, type FormInstance, type FormRules } from "element-plus";
import { accountLoginRequest } from "@/service/login/login";

const form = reactive({
  name: "",
  pwd: "",
});
const rules = reactive<FormRules<typeof form>>({
  name: [
    {
      required: true,
      message: "必须输入账号",
      trigger: "blur",
    },
  ],
  pwd: [
    {
      required: true,
      message: "必须输入密码",
      trigger: "blur",
    },
    {
      pattern: /^[a-z0-9]{6,20}/,
      min: 6,
      max: 20,
      message: "密码必须六到二十位数字或字母",
      trigger: "blur",
    },
  ],
});
const ruleFormRef = ref<FormInstance>();

function loginAction() {
  ruleFormRef.value?.validate((valid) => {
    if (valid) {
      console.log(toRaw(form));
      accountLoginRequest(toRaw(form)).then((res) => {});
      console.log("success");
    } else {
      console.log("fail");
      ElMessage({
        message: "Oops, account or password is error!",
        type: "error",
        plain: true,
      });
    }
  });
}

defineExpose({
  loginAction,
});
</script>

<template>
  <div class="pane-account">
    <el-form
      ref="ruleFormRef"
      :model="form"
      :label-position="'left'"
      label-width="60"
      size="large"
      :rules="rules"
      status-icon
    >
      <el-form-item label="账号" prop="name" required>
        <el-input v-model="form.name" />
      </el-form-item>
      <el-form-item label="密码" prop="pwd" required>
        <el-input v-model="form.pwd" show-password />
      </el-form-item>
    </el-form>
  </div>
</template>

<style scoped lang="less"></style>
