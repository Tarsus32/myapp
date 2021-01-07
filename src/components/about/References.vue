<template>
  <div id="references">
    <h1 class="main ">Referencie</h1>
    <b-container fluid class="largeScreen">
      <b-row>
        <references-item
          v-for="(item, index) in referencesItems"
          :key="item.id"
          :item_data="item"
          :index="index"
          :visibleSlide="visibleSlide"
        />
      </b-row>
      <a @click="next" class="next"
        ><i class="fas  fa-angle-left fa-10x"></i
      ></a>
      <a @click="prev" class="prev"
        ><i class="fas fa-angle-right fa-10x"></i
      ></a>
    </b-container>
  </div>
</template>

<script>
import ReferencesItem from "./References_item.vue";

export default {
  name: "References",
  components: {
    ReferencesItem
  },
  props: {
    interval: {
      type: Number,
      default: 0
    }
  },
  computed: {
    slidesLen() {
      return this.referencesItems.length;
    }
  },

  methods: {
    startSlider() {
      let vm = this;
      this.sliderTimer = setInterval(function() {
        vm.prev();
      }, 5000);
    },

    next() {
      if (this.visibleSlide <= 0) {
        this.visibleSlide = this.slidesLen - 1;
      } else {
        this.visibleSlide--;
      }
    },
    prev() {
      if (this.visibleSlide >= this.slidesLen - 1) {
        this.visibleSlide = 0;
      } else {
        this.visibleSlide++;
      }
    }
  },

  mounted() {
    this.startSlider();
  },

  data() {
    return {
      referencesItems: [
        {
          id: 1,
          name: "MichalImg",
          img: "one.jpg",
          text:
            "Je to super chlapík dobre sa mi s ním pracuje. Nebojí sa žiadnej výzvy.",
          title: "Michal",
          class: "img-one"
        },
        {
          id: 2,
          name: "PeterImg",
          img: "two.jpg",
          text: "Je pracovitý a žiadna úloha nie je pre neho cudzia.",
          title: "Peter",
          class: "img-two"
        },
        {
          id: 3,
          name: "TatianaImg",
          img: "three.jpg",
          text:
            "Milan je veľmi priateľský a pracovitý. Veľmi rád rieši úlohy a rád sa učí nové veci.",
          title: "Tatiana",
          class: "img-three"
        },
        {
          id: 4,
          name: "MartinaImg",
          img: "four.jpg",
          text:
            "Skutočne výborný spolupracovník veľmi dobre sa s ním pracuje a komunikuje takitež je veľmi dobrý kamarát.",
          title: "Martina",
          class: "img-four"
        }
      ],
      visibleSlide: 0,
      sliderTimer: 0
    };
  }
};
</script>

<style lang="scss" scoped>
h1 {
  color: #000;
  font-weight: 700;
  font-size: 2.1875em; /* 35/16 */
  padding-top: 2em;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 0.228em;
  line-height: 0.6574em;
}

a {
  text-decoration: none;
  color: #000;
}

.container-fluid {
  margin-top: 5em;
  margin-bottom: 5em;
}

.row {
  margin: 0 auto;
  width: 31.25em; /* 500/16 */
}

.largeScreen {
  position: relative;
}

/* Buttons*/

a:hover,
a:focus {
  color: #fff44f;
}
a {
  position: absolute;
}
.next {
  bottom: 30%;
  left: 10%;
}

.prev {
  bottom: 30%;
  right: 10%;
}

@media (max-width: 1050px) {
  #references {
    background: rgba(0, 0, 0, 0.8);
  }

  h1 {
    color: #fff;
  }

  a {
    color: #fff;
  }

  .col {
    margin-bottom: 2em;
  }
}

@media (max-width: 820px) {
  .fa-10x {
    font-size: 5em;
  }

  .next {
    bottom: 40%;
    left: 5%;
  }

  .prev {
    bottom: 40%;
    right: 5%;
  }
}

@media (max-width: 660px) {
  .row {
    margin: 0 auto;
    width: 18.75em; /* 300/16 */
  }
}
</style>
