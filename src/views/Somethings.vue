<template>
  <div class="somethings">
    <h1 class="animate__animated animate__rollIn">
      Vyhľadávač trailerov z filmov
    </h1>
    <movie-search />
    <movie-list />
  </div>
</template>

<script>
import MovieSearch from "@/components/movie/MovieSearch.vue";
import MovieList from "@/components/movie/MovieList.vue";

export default {
  name: "Somethings",
  components: {
    MovieSearch,
    MovieList
  }
};
</script>

<style lang="scss" scoped>
ul {
  padding-left: 0;
  margin-top: 2em;
}
li {
  margin: 1em 0;
}

.somethings {
  background: #ccc url("../assets/movie_backgrounds/movie-poster.jpg");
  background-color: #ccc;
  /*
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
	*/
  min-height: 100vh;
  font-size: 1em;
  font-weight: bold;
  letter-spacing: 1px;
  overflow: hidden;
  font-family: "Poppins", sans-serif;
  position: relative;
  transition: 5s;

  animation-name: animate;
  animation-direction: alternate-reverse;
  animation-duration: 30s;
  animation-fill-mode: forwards;
  animation-iteration-count: infinite;
  animation-play-state: running;
  animation-timing-function: ease-in-out;
}

@keyframes animate {
  0% {
    background-image: url("../assets/movie_backgrounds/movie-poster6.jpg");
  }
  25% {
    background-image: url("../assets/movie_backgrounds/movie-poster3.jpg");
  }
  50% {
    background-image: url("../assets/movie_backgrounds/movie-poster4.jpg");
  }
  75% {
    background-image: url("../assets/movie_backgrounds/movie-poster5.jpg");
  }
  100% {
    background-image: url("../assets/movie_backgrounds/movie-poster.jpg");
  }
}

h1 {
  color: #ffec3d;
  margin-top: 2em;
  font-weight: 700;
}

@media (max-width: 770px) {
  h1 {
    margin-top: 5em;
    font-size: 1.5em;
  }
}
</style>
