<template>
  <div class="about">
    <first-look />
    <my-skills />
    <my-time-line />
    <my-future />
    <references />
    <footrik></footrik>
  </div>
</template>

<script>
import FirstLook from "@/components/about/FirstLook.vue";
import MySkills from "@/components/about/MySkills.vue";
import MyTimeLine from "@/components/about/MyTimeLine.vue";
import MyFuture from "@/components/about/MyFuture.vue";
import References from "@/components/about/References.vue";
import Footrik from "@/components/about/Footrik.vue";

export default {
  components: {
    FirstLook,
    MySkills,
    MyFuture,
    MyTimeLine,
    References,
    Footrik
  }
};
</script>

<style lang="scss"></style>
