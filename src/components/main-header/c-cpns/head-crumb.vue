<script setup lang="ts">
import { useRoute } from "vue-router";
import { computed, ref } from "vue";
import { mapPathToCrumb } from "@/utils/map-menus";
import { useLoginStore } from "@/store/login/login";

const route = useRoute();
const crumbs = computed<Array<ICrumbs>>(() => mapPathToCrumb(route.path, useLoginStore().userMenu));
</script>

<template>
  <div class="crumb">
    <el-breadcrumb separator-icon="ArrowRight">
      <template v-for="item in crumbs" :key="item.path">
        <el-breadcrumb-item :to="{ path: item.path }">{{ item.name }}</el-breadcrumb-item>
      </template>
    </el-breadcrumb>
  </div>
</template>

<style scoped lang="less">
.crumb {
}
</style>
