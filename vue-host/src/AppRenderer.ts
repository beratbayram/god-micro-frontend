import { createApp } from "vue";

import App from "./App.vue";

function AppRenderer(elem: string | Element){
  createApp(App).mount(elem);
}

export {App, AppRenderer};