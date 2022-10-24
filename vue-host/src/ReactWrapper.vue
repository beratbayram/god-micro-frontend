<script lang="ts">
import { defineComponent } from "vue";
import ContentRenderer from "reactApp/ContentRenderer";

export default defineComponent({
  components: {},
  props: {
    msg: String,
  },
  mounted() {
    const { container } = this.$refs;
    ContentRenderer(container,{msg:this.msg});
  },
});
</script>

<template>
  <div ref="container"></div>
</template>
