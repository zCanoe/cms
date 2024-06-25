import { createPinia } from "pinia";
import type { App } from "vue";
import { useLoginStore } from "@/store/login/login";
import { createPersistedState } from "pinia-plugin-persistedstate";

const pinia = createPinia();

function reLoadExecute(app: App<Element>) {
  // pinia持久化
  pinia.use(
    createPersistedState({
      storage: localStorage,
    }),
  );
  app.use(pinia);
  console.log("刷新");
  // 刷新注册动态路由
  useLoginStore().reloadDynamicMenu();
}

export default reLoadExecute;
