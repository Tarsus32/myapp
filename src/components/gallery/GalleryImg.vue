<template>
  <b-row class="image">
    <b-col md="4">
      <div class="items">
        <a href="#">
          <img :src="require('@/assets/gallery/' + image.img)" alt="" />
        </a>
      </div>
    </b-col>
  </b-row>
</template>

<script>
export default {
  props: {
    image: {
      type: Object
    }
  }
};
</script>

<style lang="scss" scoped>
img {
  display: inline-block;
  width: 100%;
  border: 4px solid white;
}

.image {
  display: inline-block;
}
</style>
