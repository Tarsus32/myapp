<template>
  <b-col
    class="single animate__animated animate__fadeInLeft"
    :class="[item_data.class]"
    v-show="visibleSlide === index"
  >
    <div class="text">
      <h2>{{ item_data.title }}</h2>
      <p>{{ item_data.text }}</p>
    </div>
  </b-col>
</template>

<script>
export default {
  name: "ReferencesItem",
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
.img-one {
  background-image: url("../../assets/references photos/one.jpg");
  background-size: cover;
  background-position: center center;
}

.img-two {
  background-image: url("../../assets/references photos/two.jpg");
  background-size: cover;
  background-position: center center;
}

.img-three {
  background-image: url("../../assets/references photos/three1.jpg");
  background-size: cover;
  background-position: center center;
}

.img-four {
  background-image: url("../../assets/references photos/four.jpg");
  background-size: cover;
  background-position: center center;
}

.text {
  background: #fff;
  padding: 0 0.625em 0.3125em 0.625em; /* 10/16 */ /* 5/16 */ /* 10/16 */
  height: 12em;
  position: relative;
  transform: translate(0, 7em); /* 110/16 */
  line-height: 1.5em; /* 24/16 */
  transition: 0.5s ease;
  display: inline-block;
}

.single {
  border-radius: 0.3125em; /* 5/16 */
  display: flex;
  flex-direction: column-reverse;
  margin: 0 2em;
  flex-wrap: nowrap;
  width: 20.3125em; /* 325/16 */
  height: 21.875em; /* 350/16 */
  box-shadow: 0.3125em 0.3125em 1.25em rgba(0, 0, 0, 0.3); /* 5/16 */ /* 5/16 */ /* 20/16 */
  overflow: hidden;
  transform: translate(0, 0);
  transition: 0.3s;
}

h2,
p {
  font-family: "Poppins", sans-serif;
}

h2 {
  line-height: 1em;
  padding: 0;
  margin: 1em 0;
}

.single:hover .text {
  transform: translate(0, 0);
}

.single:hover {
  transform: translate(0, -0.5625em); /* 9/16 */
}

.col {
  padding: 0;
}

p::before {
  content: "\201C";
  top: 0;
  left: 2em;
}

p::after {
  content: "\201C";
  bottom: 0;
  right: 2em;
}

@media (max-width: 660px) {
  .text {
    transform: translate(0, 11em);
    height: 16em;
  }
}
</style>
