<template>
  <div>
    <ul v-cloak class="movie-list">
      <li>
        <movie-trailer
          v-for="movie in movies.slice(0, this.numberMovie)"
          :key="movie.id"
          :movie="movie"
        />
      </li>
    </ul>
    <a class="addMoreSongs" @click="addItems" v-show="movies.length > 0">
      <i class="fas fa-plus fa-4x "></i>
    </a>
  </div>
</template>

<script>
import MovieTrailer from "@/components/movie/MovieTrailer.vue";

export default {
  components: {
    MovieTrailer
  },
  data() {
    return {
      movies: [],
      numberMovie: 4
    };
  },
  mounted() {
    this.$root.$on(
      "more-movies",
      data => ((this.numberMovie = 4), (this.movies = data))
    );
  },
  methods: {
    addItems() {
      this.numberMovie += 4;
      return this.movies.slice(0, this.numberMovie);
    }
  }
  //props: ['new-movies']
};
</script>

<style scoped lang="scss">
ul {
  padding-left: 0;
}

.addMoreSongs {
  border-radius: 50%;
  background-color: #fff44f;
  text-decoration: none;
  font-size: 3em;
  padding: 3em 2em;
  color: #fff;
  text-decoration: none;
  //vertical-align: bottom;
  // width: 50%;
  //margin: 0 auto -2.8em auto;
}

.addMoreSongs:hover,
.addMoreSongs:focus {
  background-color: #fff;
  color: #fff44f;
}

.fa-plus {
  margin: -0.2em 0;
}
</style>
