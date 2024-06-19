<script setup lang="ts">
import { ref, toRaw, watch } from "vue";
import PaneAccount from "@/views/login/c-cpns/pane-account.vue";
import PanePhone from "@/views/login/c-cpns/pane-phone.vue";
import { localCache } from "@/utils/cache";

enum LOGIN_ENUM {
  REM = "isRemPwd",
}

const isRemPwd = ref<boolean>(localCache.get(LOGIN_ENUM.REM) ?? false);
const currentTab = ref("0");
const accountRef = ref<InstanceType<typeof PaneAccount>>();

watch(isRemPwd, (nv) => {
  console.log(nv);
  localCache.set(LOGIN_ENUM.REM, nv);
});

function handleLoginBtn() {
  switch (currentTab.value) {
    case "0":
      accountRef.value?.loginAction(isRemPwd);
      console.log("账号登陆");
      break;
    case "1":
      console.log("手机登陆");
      break;
  }
}
</script>

<template>
  <div class="login-panel">
    <h1 class="title">后台管理系统</h1>
    <div class="tabs">
      <el-tabs v-model="currentTab" type="border-card" stretch>
        <el-tab-pane label="账号登录">
          <template #label>
            <span class="label">
              <el-icon>
                <UserFilled />
              </el-icon>
              账号登录
            </span>
          </template>
          <pane-account ref="accountRef" />
        </el-tab-pane>
        <el-tab-pane label="手机登录">
          <template #label>
            <span class="label">
              <el-icon>
                <PhoneFilled />
              </el-icon>
              手机登录
            </span>
          </template>
          <pane-phone />
        </el-tab-pane>
      </el-tabs>
    </div>
    <div class="account-control">
      <el-checkbox v-model="isRemPwd" label="记住密码" size="large" />
      <el-link type="primary">忘记密码</el-link>
    </div>
    <el-button
      class="login-btn"
      size="large"
      type="primary"
      @click="handleLoginBtn"
      >立即登陆
    </el-button>
  </div>
</template>

<style scoped lang="less">
.login-panel {
  margin-bottom: 150px;
  width: 320px;

  .title {
    text-align: center;
  }

  .tabs {
    .label {
      display: flex;
      align-items: center;
    }
  }

  .account-control {
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
  }

  .login-btn {
    width: 100%;
    margin-top: 10px;
  }
}
</style>
