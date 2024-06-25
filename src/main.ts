import App from "./App.vue";
import "normalize.css";
import "./assets/css/index.less";
import { createApp } from "vue";
import router from "./router";
import pinia from "./store";
import registerIcons from "@/global/register-icons";
import { createPersistedState } from "pinia-plugin-persistedstate";
// import "element-plus/theme-chalk/el-message.css";
// import "element-plus/dist/index.css";

const app = createApp(App);

app.use(pinia);
app.use(router);
app.use(registerIcons);
app.mount("#app");
