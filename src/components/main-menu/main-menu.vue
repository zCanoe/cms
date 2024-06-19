<script setup lang="ts">
import { useLoginStore } from "@/store/login/login";

const userMenu = useLoginStore().userMenu;
</script>

<template>
  <div class="main-menu">
    <div class="logo">
      <img class="img" src="@/assets/img/logo.svg" />
      <div class="title">cms</div>
    </div>
    <el-menu
      text-color="#b7bdc3"
      active-text-color="#fff"
      background-color="#001529"
      default-active="3"
      class="el-menu-vertical-demo"
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
            <el-menu-item :index="`${subItem.id}`"
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
