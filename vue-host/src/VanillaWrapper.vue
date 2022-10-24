<script lang="ts">
import {defineComponent } from "vue";
import VanillaAppRenderer from "vanillaApp/AppRenderer";

export default defineComponent({
  components: {},
  props: {
    msg: String,
  },
  mounted() {
    const { container } = this.$refs;
    VanillaAppRenderer(container,{msg:this.msg});
  },
});
</script>

<template>
  <div ref="container"></div>
</template>
