import { createApp } from "vue";

import Content from "./Content.vue";

function ContentRenderer(elem: string | Element){
  createApp(Content).mount(elem);
}

export {Content, ContentRenderer};