import { createSSRApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createPinia } from "pinia";
import { renderToString } from "@vue/server-renderer";

export async function render(url: string) {
  const app = createSSRApp(App);
  app.use(createPinia());
  app.use(router);

  router.push(url);
  await router.isReady();

  const html = await renderToString(app);
  return { html };
}
