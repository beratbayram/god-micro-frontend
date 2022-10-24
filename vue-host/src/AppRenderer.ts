import { createApp } from "vue";

import App from "./App.vue";

interface Props {
  [msg: string]: string;
}

let app: typeof App | null = null;

function AppRenderer(elem: string | Element,props: Props){
  if (app) app.unmount()
  app = createApp(App, props)
  app.mount(elem);
}

export {App, AppRenderer};