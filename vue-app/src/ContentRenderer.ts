import { App, createApp } from "vue";

import Content from "./Content.vue";

interface Props {
  [msg: string]: string;
}

let app: App<Element> | null = null;

function ContentRenderer(elem: string | Element, props: Props) {
  if (app) app.unmount()
  app = createApp(Content, props)
  app.mount(elem);
}

export { Content, ContentRenderer };
