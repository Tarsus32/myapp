<template>
  <div class="home">
    <HelloWorld />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/home/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld
  }
};
</script>

<style lang="scss">
.home {
  background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.3) 0%,
      rgba(0, 0, 0, 0.3) 100%
    ),
    url("../assets/backgrounds/home-background.jpg");
  background-size: cover;
  background-position: center;
  height: 100vh;
  font-size: 1em;
  font-weight: bold;
  letter-spacing: 1px;
  overflow: hidden;
}
</style>
