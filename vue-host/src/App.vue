<script lang="ts">
import "./index.css";
import { defineComponent } from "vue";
import { Content } from "vueApp/ContentRenderer";
import ContentRenderer from "reactApp/ContentRenderer";
import "reactApp/ContentWc";
import VanillaAppRenderer from "vanillaApp/AppRenderer";
import "angularApp/Component";

export default /*#__PURE__*/ defineComponent({
  components: { Content },
  mounted() {
    const { reactRef, vanillaRef } = this.$refs;
    ContentRenderer(reactRef);
    VanillaAppRenderer(vanillaRef);
  },
  methods: {
    greet() {
      window.alert("hey");
    },
  },
});
</script>

<template>
  <div>
    <h1>VueHost</h1>
    <p>(:3005)</p>
    <lit-button></lit-button>
    <button>hello</button>
  </div>
  <div @click="greet" ref="reactRef"></div>
  <content-wc name="React WC" @click="greet" />
  <Content @click="greet"></Content>
  <div @click="greet" ref="vanillaRef"></div>
  <angular-component @click="greet" />
</template>
