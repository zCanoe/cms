import App from "./App.vue";
import "normalize.css";
import "./assets/css/index.less";
import { createApp } from "vue";
import router from "./router";
import pinia from "./store";

const app = createApp(App);
app.use(router);
app.use(pinia);
app.mount("#app");
