<template>
  <div class="user">
    <user-search @reset-click="resetClick" @search-click="searchClick" />
    <user-content ref="contentEl" @add-user="handleAddUser" />
    <user-modal ref="userModalEl" />
  </div>
</template>

<script setup lang="ts" name="user">
import UserSearch from "@/views/main/system/user/c-cpns/user-search.vue";
import UserContent from "@/views/main/system/user/c-cpns/user-content.vue";
import { ref } from "vue";
import type userContent from "@/views/main/system/user/c-cpns/user-content.vue";
import userModal from "@/views/main/system/user/c-cpns/user-modal.vue";

const contentEl = ref<InstanceType<typeof userContent>>();
const userModalEl = ref<InstanceType<typeof userModal>>();

function resetClick() {
  contentEl.value?.fetchUserList();
}

function searchClick(form: any) {
  contentEl.value?.fetchUserList(form);
}

function handleAddUser() {
  console.log(userModalEl.value);
  userModalEl.value?.setVisible();
}
</script>

<style scoped>
.user {
  border-radius: 8px;
  overflow: hidden;
}
</style>
