<script lang="ts">
import { defineComponent } from "vue";
import "./index.css";

export default defineComponent({
  props: {
    msg: String,
  },
});
</script>

<template>
  <div class="vue-container">
    <div>Name: vue-app (:3002)</div>
    <input disabled :value="msg" />
    <lit-button></lit-button>
  </div>
</template>
