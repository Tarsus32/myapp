<template>
  <b-col>
    <div
      class="text-content animate__animated animate__fadeIn "
      :class="[item_data.class]"
      v-show="visibleSlide === index"
    >
      <h2>{{ item_data.title }}</h2>
      <p>{{ item_data.text }}</p>
    </div>
  </b-col>
</template>

<script>
export default {
  name: "TimeLineItem",
  props: {
    item_data: { type: Object, default: () => {} },
    visibleSlide: Number,
    index: Number
  },
  data() {
    return {};
  }
};
</script>

<style scoped>
.text-content {
  padding: 1.875em 2.5em; /* 30/16 */ /* 40/16 */
  text-align: center;
}

.text-content h2 {
  font-size: 1.0625em; /* 17/16 */
  text-transform: uppercase;
  color: #333;
  letter-spacing: 0.0625em; /* 1/16 */
}

.text-content p {
  font-size: 1em;
  line-height: 1.8em;
  color: #777;
}

@media (max-width: 930px) {
  .text-content p {
    text-align: justify;
  }
}

@media (max-width: 755px) {
  .text-content p {
    font-size: 0.8em;
  }
}

@media (max-width: 500px) {
  .text-content {
    padding: 1.5em 1em;
  }
}
</style>
