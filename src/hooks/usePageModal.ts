import { ref } from "vue";
import type pageModal from "@/components/page-modal/page-modal.vue";

const modalEl = ref<InstanceType<typeof pageModal>>();

function handleAddPage() {
  modalEl.value?.setVisible(true);
}

function handleEditPage(row: any) {
  modalEl.value?.setVisible(false, row);
}

export { modalEl, handleAddPage, handleEditPage };
