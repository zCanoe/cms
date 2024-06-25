<script setup lang="ts">
import { useLoginStore } from "@/store/login/login";
import router from "@/router";
import { computed, ref } from "vue";
import { mapPathToMenu } from "@/utils/map-menus";
import { useRoute, useRouter } from "vue-router";

defineProps({
  isCollapse: {
    type: Boolean,
    default: false,
  },
});
const userMenu = useLoginStore().userMenu;
const route = useRoute();
const defaultActive = computed<string>(() => mapPathToMenu(route.path, userMenu));
console.log(defaultActive.value);

function handleMenuClick(sub) {
  router.push(sub.url);
}
</script>

<template>
  <div class="main-menu">
    <div class="logo">
      <img class="img" src="@/assets/img/logo.svg" />
      <div v-show="!isCollapse" class="title">cms</div>
    </div>
    <el-menu
      text-color="#b7bdc3"
      active-text-color="#fff"
      background-color="#001529"
      class="el-menu-vertical-demo"
      :collapse="isCollapse"
      :default-active="defaultActive"
    >
      <template v-for="item in userMenu" :key="item.id">
        <el-sub-menu :index="`${item.id}`">
          <template #title>
            <el-icon>
              <component :is="item.icon.split('-icon-')[1]" />
            </el-icon>
            <span>{{ item.name }}</span>
          </template>
          <template v-for="subItem in item.children" :key="subItem.id">
            <el-menu-item :index="`${subItem.id}`" @click="handleMenuClick(subItem)"
              >{{ subItem.name }}
            </el-menu-item>
          </template>
        </el-sub-menu>
      </template>
    </el-menu>
  </div>
</template>

<style scoped lang="less">
.main-menu {
  height: 100%;
  background-color: #001529;
  //--el-menu-bg-color: rgba(0, 0, 0, 0);

  .logo {
    display: flex;
    height: 28px;
    padding: 12px 10px 8px 10px;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;

    .img {
      height: 100%;
      margin: 0 10px;
    }

    .title {
      font-size: 16px;
      font-weight: 700;
      color: white;
    }
  }

  :deep(.el-menu) {
    border-right: none;
  }

  // 目录
  :deep(.el-submenu) {
    background-color: #001529 !important;
  }

  :deep(.el-submenu__title) {
    background-color: #001529 !important;
  }

  // 二级菜单 ( 默认背景 )
  :deep(.el-menu-item) {
    padding-left: 50px !important;
    background-color: #0c2135 !important;
  }

  // hover 高亮
  :deep(.el-menu-item):hover {
    color: #fff !important; // 菜单
  }

  :deep(.el-menu-item .is-active) {
    color: #fff !important;
    background-color: #0a60bd !important;
  }
}

:deep(.el-menu-vertical):not(.el-menu--collapse) {
  width: 100%;
  height: calc(100% - 48px);
}
</style>
