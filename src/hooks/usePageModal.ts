import { ref } from "vue";
import type pageModal from "@/components/page-modal/page-modal.vue";

const modalEl = ref<InstanceType<typeof pageModal>>();

function handleAddPage(cb?: () => void) {
  if (cb) cb();
  modalEl.value?.setVisible(true);
}

function handleEditPage(row: any, cb?: () => void) {
  if (cb) cb();
  modalEl.value?.setVisible(false, row);
}

export { modalEl, handleAddPage, handleEditPage };
