<template>
  <div class="gallery">
    <h1>Galéria obrázkov</h1>
    <gallery-filters />
  </div>
</template>

<script>
import GalleryFilters from "@/components/gallery/GalleryFilters.vue";

export default {
  name: "Gallery",
  components: {
    GalleryFilters
  }
};
</script>

<style lang="scss" scoped>
.gallery {
  background: #4c4177;
  background-image: linear-gradient(315deg, #4c4177 0%, #2a5470 74%);
  background-size: cover;
  height: 100vh;
  overflow: hidden;
  color: #fff;
}

h1 {
  margin-top: 2em;
  font-size: 3em;
  color: #fff;
}
</style>
