<template>
  <form @submit.prevent="getMovies()">
    <input v-model="query" type="text" />
  </form>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      query: ""
    };
  },
  methods: {
    getMovies() {
      axios
        .get(
          `https://itunes.apple.com/search
					?term=${encodeURI(this.query)}
					&entity=movie
					&limit=20`
        )
        .then(response => {
          //console.log(response.data)
          let DataMovies = response.data.results.map(movie =>
            this.extractData(movie)
          );

          this.$root.$emit("more-movies", DataMovies);
        });
    },
    extractData({
      trackId: id,
      artistName: artist,
      previewUrl: video,
      artworkUrl100: cover,
      trackName: name,
      collectionName: nameseries,
      releaseDate: cinema
    }) {
      return { id, artist, video, cover, name, nameseries, cinema };
    }
  }
};
</script>

<style lang="scss" scoped>
input {
  width: 50%;
  display: block;
  margin: 0 auto;
  margin-top: 2em;
  z-index: 5;

  padding: {
    top: 0.5em;
    bottom: 0.5em;
    left: 2.95em;
    right: 0.75em;
  }

  color: #333;
  font-size: 1.5em;
  font-weight: 700;
  border: none;
  border-radius: 0.5em;
  background: #fff;
  box-sizing: border-box;

  outline: none;
  appearance: none;

  background: {
    image: url("../../assets/search.svg");
    repeat: no-repeat;
    position-y: 50%;
    position-x: 1em;
    color: #fff;
    size: 1em;
  }
}

@media (max-width: 600px) {
  input {
    width: 80%;
  }
}
</style>
