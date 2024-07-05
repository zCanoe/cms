import { ref } from "vue";
import type pageContent from "@/components/page-content/page-content.vue";

const contentEl = ref<InstanceType<typeof pageContent>>();

function handleResetClick() {
  contentEl.value?.fetchPageList();
}

function handleSearchClick(form: any) {
  contentEl.value?.fetchPageList(form);
}

export { contentEl, handleResetClick, handleSearchClick };
