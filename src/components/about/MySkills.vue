<template>
  <div id="my-skills" v-on:scroll="handleScroll()">
    <div class="container-fluid">
      <b-row cols-md="8">
        <b-col cols="4" class="image ">
          <img
            src="../../assets/my_photos/title.jpg"
            alt="myphoto"
            class="huge animate__animated animate__zoomInDown"
          />
        </b-col>
        <b-col class="allMySkills">
          <div class="text">
            <h2>Predslov</h2>
            <p class="main-text">
              Ahojte moje meno je Milan a učím sa programovať webstránky a
              aplikácie. Programovanie som považoval za niečo čo sa nedokáže
              naučiť každý, avšak potom čo som videl <strong>Yablka</strong> ako
              vysvetľuje po lopate ako sa dá naučiť programovať tak som si
              povedal, že to vyskúšam aj ja.
            </p>
            <img
              src="../../assets/my_photos/title4.jpg"
              alt="myphoto"
              class="mobile float-left animate__animated animate__zoomInDown"
            />
            <p class="main-text margin-text">
              Najprv som si zakúpil od Yablka kurz Webrebel I., kde som sa
              naučil jazyk HTML a CSS a taktiež niečo z JQuery. Potom som si
              zakúpil kurz základy programovania, kde som sa naučil základy na
              jazyku PHP. Potom som si kúpil Sass kurz. Po Sass kurze som sa
              začal učiť Javascript a nakoniec som si chcel vyskúšať aj
              framework Vue.js. Aj táto stránka je robená pomocou Vue.js.
            </p>

            <b-button class="mt-3 small" @click="resetBar()">Refresh</b-button>
          </div>

          <h5>HTML</h5>
          <b-progress :max="max">
            <b-progress-bar
              :value="valueHTML"
              :style="{ width: valueHTML + '%' }"
              >{{ valueHTML }}%</b-progress-bar
            >
          </b-progress>

          <h5>CSS</h5>
          <b-progress :max="max">
            <b-progress-bar
              :value="valueCSS"
              :style="{ width: valueCSS + '%' }"
            >
              {{ valueCSS }}%</b-progress-bar
            >
          </b-progress>

          <h5>JavaScript</h5>
          <b-progress :max="max">
            <b-progress-bar :value="valueJS" :style="{ width: valueJS + '%' }"
              >{{ valueJS }}%</b-progress-bar
            >
          </b-progress>

          <h5>Vue.js</h5>
          <b-progress :max="max" class="last-progress">
            <b-progress-bar
              :value="valueVue"
              :style="{ width: valueVue + '%' }"
            >
              {{ valueVue }}%</b-progress-bar
            >
          </b-progress>

          <b-button class="mt-3 large" @click="resetBar()">Refresh</b-button>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
//import { debounce } from 'lodash'

export default {
  data() {
    return {
      valueHTML: 0,
      valueCSS: 0,
      valueJS: 0,
      valueVue: 0,
      max: 100,
      scrollPosition: null
    };
  },
  methods: {
    progressBar() {
      var inter = setInterval(() => {
        if (this.valueHTML < 91) this.valueHTML += 3;
        else clearInterval(inter);
      }, 30);

      var interCSS = setInterval(() => {
        if (this.valueCSS < 82) this.valueCSS += 3;
        else clearInterval(interCSS);
      }, 30);

      var interJS = setInterval(() => {
        if (this.valueJS < 62) this.valueJS += 3;
        else clearInterval(interJS);
      }, 30);

      var interVue = setInterval(() => {
        if (this.valueVue < 58) this.valueVue += 3;
        else clearInterval(interVue);
      }, 30);
    },

    resetBar() {
      if (
        this.valueHTML == 0 &&
        this.valueCSS == 0 &&
        this.valueVue == 0 &&
        this.valueJS == 0
      )
        this.progressBar();
      else this.valueHTML = 0;
      this.valueCSS = 0;
      this.valueJS = 0;
      this.valueVue = 0;
    },

    handleScroll() {
      //console.log(event)
      if (window.scrollY > 700) this.progressBar();
    }
  },

  beforeMount() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  }
};
</script>

<style lang="scss" scoped>
#my-skills {
  background-color: #fff;
  background-size: cover;
  background-position: center;
  height: 100vh;
  font-size: 1em;
  font-weight: bold;
  letter-spacing: 1px;
  overflow: hidden;
  font-family: "Poppins", sans-serif;
}

img {
  display: block;
  margin: 0 auto;
  margin-top: 25%;
  margin-bottom: 5%;
  border: 5px solid #ffec3d;
  border-radius: 20%;
}

.text {
  margin-top: 3em;
  text-align: justify;
}

.allMySkills {
  margin-right: 1em;
}

h1,
h2,
h5,
p {
  font-family: "Poppins", sans-serif;
}

h2 {
  font-weight: 700;
  font-size: 2.1875em; /* 35/16 */
  text-transform: uppercase;
  letter-spacing: 0.228em;
  line-height: 0.6574em;
  margin-bottom: 0.7em;
}

.progress-bar {
  background-color: #ffec3d;
}
.progress {
  margin-bottom: 1em;
}

h5 {
  text-align: left;
  font-weight: 600;
}

button {
  text-align: center;
  background-color: rgba(0, 0, 0, 0.8);
  color: #fff44f;
  font-size: 0.9375em; /* 15/16 */
  font-weight: 800;
  width: 12em; /* 180/15 */
  border: 0.13333333333333333em solid #fff44f; /* 2/15 */
  padding: 0.9333333333333333em 0; /* 14/15 */
  border-radius: 0.4em; /* 6/15 */
  transition: 0.2s linear;
  margin-left: 0;
}

button:hover,
button:focus {
  background-color: #fff;
  color: #fff44f;
}

.mobile,
.small {
  display: none;
}

@media (max-width: 1100px) {
  h2 {
    text-align: center;
  }
  .main-text {
    font-size: 0.8em;
  }
}

@media (max-width: 930px) {
  .col {
    flex-basis: auto;
  }

  .huge,
  .large {
    display: none;
  }

  .mobile,
  .small {
    display: block;
  }

  img {
    margin: 0;
    margin-top: 0;
    margin: 1em;
  }

  .float-left {
    float: left;
  }

  .margin-text {
    margin-bottom: 7%;
  }

  button {
    margin: 5% auto;
  }

  .last-progress {
    margin-bottom: 5%;
  }

  #my-skills {
    height: auto;
  }
}

@media (max-width: 720px) {
  h5 {
    font-size: 1em;
  }
}

@media (max-width: 490px) {
  .float-left {
    float: none !important;
  }

  img {
    margin: 1em auto;
  }
}
</style>
