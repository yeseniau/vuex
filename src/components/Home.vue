<template>
  <div>
    <h1 v-text="title"></h1>
    <h3 v-text="subtitle"></h3>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["title", "subtitle"]),
  },
};
</script>
