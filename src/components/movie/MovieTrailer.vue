<template>
  <b-card
    no-body
    class="overflow-hidden movie-list-trailer animate__animated animate__zoomIn"
    v-cloak
    :class="classObj"
  >
    <b-row no-gutters>
      <b-col>
        <h2>
          <strong>{{ movie.name | smaller(40) }}</strong>
        </h2>
        <div class="title">
          <b-card-img
            :src="movie.cover"
            alt="Image"
            class="rounded-0"
          ></b-card-img>
          <div class="text">
            <h4>Info o filme</h4>
            <h5>Režisér:</h5>
            <p>{{ movie.artist | smaller }}</p>
            <h5>V kinách od:</h5>
            <p>
              {{
                movie.cinema.slice(8, 10) +
                  ". " +
                  movie.cinema.slice(5, 7) +
                  ". " +
                  movie.cinema.slice(0, 4)
              }}
            </p>
          </div>
        </div>
        <b-card-body>
          <h4>
            Trailer k filmu
          </h4>
          <figure v-if="movie.video">
            <video width="320" height="auto" controls>
              <source :src="movie.video" type="video/webm" />

              <source :src="movie.video" type="video/mp4" />
            </video>
          </figure>
        </b-card-body>
        <div class="buttons">
          <h3>Farby pozadia</h3>
          <a class="btn btnRed" @click="selected = 1"></a>
          <a class="btn btnGreen" @click="selected = 2"></a>
          <a class="btn btnBlue" @click="selected = 3"></a>
          <a class="btn btnBlack" @click="selected = 4"></a>
          <a class="btn btnPurple" @click="selected = 5"></a>
        </div>
      </b-col>
    </b-row>
  </b-card>
</template>

<script>
import { truncate } from "lodash";

export default {
  data() {
    return {
      selected: 0
    };
  },
  props: {
    movie: {
      type: Object
    }
  },
  filters: {
    smaller(str, len = 32) {
      return truncate(str, { length: len });
    }
  },
  computed: {
    classObj() {
      return {
        btnRed: this.selected == 1,
        btnGreen: this.selected == 2,
        btnBlue: this.selected == 3,
        btnBlack: this.selected == 4,
        btnPurple: this.selected == 5
      };
    }
  }
};
</script>

<style lang="scss" scoped>
.movie-list-trailer {
  color: #fff;
  text-align: left;
  width: 37em;
  height: 45em;
  margin: 0 auto 2em;
  box-sizing: border-box;
  background-color: #262626;
  border-radius: 0.75em;
  position: relative;
  transition: 0.1s;
  display: inline-block;
  margin: 2em;
  z-index: 5;
}

.col-md-6 {
  margin: 0 auto;
  max-width: 100%;
}

img {
  width: 100px;
  height: auto;
  vertical-align: top;
  margin-top: 1em;
  border: 2px solid #fff;
}

.text {
  display: inline-block;
  margin-left: 2em;
}

h2 {
  font-size: 1.5em;
  text-align: center;
  margin-bottom: 1em;
  margin-top: 1em;
  color: #ffec3d;
}

h4 {
  padding-bottom: 0.5em;
}

h5 {
  font-weight: 700;
  color: #ffec3d;
}

p {
  font-size: 1em;
  width: 19em;
}

video {
  border: 5px solid #fff;
}

.title,
.card-body,
.buttons {
  margin: 0 auto;
  display: table;
}

.buttons {
  margin-bottom: 2em;
}

.card-body {
  padding: 1em 1em 0 1em;
}

.btn {
  width: 20px;
  height: 20px;
  background-color: #e4405f;
  border: 2px solid #fff;
  margin-left: 1em;
}

.btnRed {
  background-color: #e4405f;
}
.btnGreen {
  background-color: #3cba54;
}
.btnBlue {
  background-color: #2e294e;
}

.btnBlack {
  background-color: #262626;
}

.btnPurple {
  background-color: #cc73e1;
}

h3 {
  margin-left: 1em;
}

@media (max-width: 1245px) {
  .movie-list-trailer {
    height: auto;
  }
}

@media (max-width: 770px) {
  .movie-list-trailer {
    margin: 2em 0;
  }
}

@media (max-width: 600px) {
  .movie-list-trailer {
    width: 100%;
  }
}

@media (max-width: 466px) {
  .text {
    width: 50%;
  }

  img {
    margin-left: 1em;
  }
}
</style>
