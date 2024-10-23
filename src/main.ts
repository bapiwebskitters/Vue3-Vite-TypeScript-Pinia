// main.ts
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createPinia } from "pinia";
import ToastPlugin from "vue-toast-notification";

// Import the global style
import "./assets/styles/main.scss";
import "vue-toast-notification/dist/theme-bootstrap.css";

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(ToastPlugin);

router.isReady().then(() => {
  app.mount("#app");
});
