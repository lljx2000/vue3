/* jshint esversion:6 */
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./assets/css/global.css";
import axios from "./axios";

const app = createApp(App);

app.use(store).use(router).mount("#app");

app.config.globalProperties.$router = router;
app.config.globalProperties.$axios = axios;
