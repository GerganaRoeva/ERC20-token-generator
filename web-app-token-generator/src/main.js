import { createApp } from "vue";
import App from "./App.vue";
import router from "./router.js";
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

createApp(App).use(router, ElementPlus).mount("#app");

