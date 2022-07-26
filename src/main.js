import { createApp } from "vue";
import App from "./App.vue";
import { createPinia } from "pinia";
import ElementPlus from "element-plus";
import { createRouter, createWebHashHistory } from "vue-router";
import "element-plus/dist/index.css";
import zhCn from "element-plus/es/locale/lang/zh-cn";
import { routes } from "./router/index";

const app = createApp(App);
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
app.use(ElementPlus, { locale: zhCn }).use(createPinia()).use(router);
app.mount("#app");
