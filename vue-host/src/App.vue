<script lang="ts">
import "./index.css";
import { defineComponent } from "vue";
import { Content } from "vueApp/ContentRenderer";
import ReactWrapper from "./ReactWrapper.vue";
import VanillaWrapper from "./VanillaWrapper.vue";
import "reactApp/ContentWc";
import "angularApp/Component";

export default defineComponent({
  components: { Content, ReactWrapper, VanillaWrapper },
  props: {
    msg: String,
  },
  methods: {
    greet() {
      window.alert("hey");
    }
  },
});
</script>

<template>
  <div>
    <h1>VueHost</h1>
    <p>(:3005)</p>
    <lit-button></lit-button>
    <button>hello</button>
    <input disabled :value="msg" />
  </div>
  <content-wc name="React WC" :msg="msg" />
  <ReactWrapper :msg="msg"/>
  <Content @click="greet" :msg="msg"/>
  <VanillaWrapper :msg="msg"/>
  <angular-component :msg="msg" />
</template>
