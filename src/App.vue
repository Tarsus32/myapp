<template>
  <div id="app">
    <the-header />

    <main class="content">
      <router-view />
    </main>
  </div>
</template>

<script>
import TheHeader from "./components/TheHeader.vue";

export default {
  components: {
    TheHeader
  }
};
</script>

<style lang="scss">
@import "./assets/scss/main.scss";
</style>
