<script setup lang="ts">
import { onMounted, reactive, type Ref, ref, toRaw, type UnwrapRef } from "vue";
import { ElMessage, type FormInstance, type FormRules } from "element-plus";
import { useLoginStore } from "@/store/login/login";
import type { IAccount } from "../../../../env";
import { localCache } from "@/utils/cache";

enum ACCOUNT_ENUM {
  CACHE_NAME = "name",
  CACHE_PWD = "pwd",
}

onMounted(() => {
  console.log(useLoginStore().token);
});

const form = reactive<IAccount>({
  name: localCache.get(ACCOUNT_ENUM.CACHE_NAME),
  pwd: localCache.get(ACCOUNT_ENUM.CACHE_PWD),
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

function loginAction(isRemPwd: Ref<UnwrapRef<boolean>>) {
  ruleFormRef.value?.validate((valid) => {
    if (valid) {
      console.log(toRaw(form));
      useLoginStore()
        .loginAccountAction(toRaw(form))
        .then(() => {
          if (isRemPwd.value) {
            localCache.set(ACCOUNT_ENUM.CACHE_NAME, form.name);
            localCache.set(ACCOUNT_ENUM.CACHE_PWD, form.pwd);
          } else {
            localCache.remove(ACCOUNT_ENUM.CACHE_NAME);
            localCache.remove(ACCOUNT_ENUM.CACHE_PWD);
          }
        });
    } else {
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
