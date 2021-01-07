<template>
  <div id="my-time-line">
    <h1>Krátky životopis</h1>
    <b-container fluid>
      <div class="wrapper">
        <div class="timeline-bar">
          <ul class="dots">
            <li class="step step01 active " @click="visibleSlide = 0">
              <div class="step-inner">Stredná škola</div>
            </li>
            <li
              class="step step02"
              :class="{ active: visibleSlide >= 1 }"
              @click="visibleSlide = 1"
            >
              <div class="step-inner">Vysoká škola</div>
            </li>
            <li
              class="step step03"
              @click="visibleSlide = 2"
              :class="{ active: visibleSlide >= 2 }"
            >
              <div class="step-inner">Po škole</div>
            </li>
            <li
              class="step step04"
              @click="visibleSlide = 3"
              :class="{ active: visibleSlide >= 3 }"
            >
              <div class="step-inner">Magneti Marelli</div>
            </li>
            <li
              class="step step05"
              @click="visibleSlide = 4"
              :class="{ active: visibleSlide >= 4 }"
            >
              <div class="step-inner">Súčastnosť</div>
            </li>
          </ul>

          <div class="line">
            <div class="line-progress" :class="classLines"></div>
          </div>
        </div>

        <div class="verticalLine">
          <div class="line-progress-vertical" :class="classVertical"></div>
        </div>

        <div class="sections animate__animated animate__fadeIn">
          <b-row>
            <time-line-item
              v-for="(item, index) in TimeLineItems"
              :key="item.id"
              :item_data="item"
              :index="index"
              :visibleSlide="visibleSlide"
            />
          </b-row>
        </div>
      </div>
    </b-container>
  </div>
</template>

<script>
import TimeLineItem from "./TimeLine_item.vue";

export default {
  name: "TimeLine",
  components: {
    TimeLineItem
  },
  computed: {
    classLines() {
      return {
        lineOne: this.visibleSlide >= 1,
        lineTwo: this.visibleSlide >= 2,
        lineThree: this.visibleSlide >= 3,
        lineFour: this.visibleSlide >= 4
      };
    },
    classVertical() {
      return {
        verticalOne: this.visibleSlide >= 1,
        verticalTwo: this.visibleSlide >= 2,
        verticalThree: this.visibleSlide >= 3,
        verticalFour: this.visibleSlide >= 4
      };
    }
  },

  data() {
    return {
      TimeLineItems: [
        {
          id: 1,
          title: "Stredná škola",
          text:
            "Po základnej škole v roku 2004 som nastúpil na Strednú Priemyselnú Školu v Prešove sídliacej na Plzneskej ulici. Študoval som odbor počítačové systémy. Strednú školu som ukončil v roku 2008 maturitnou skúškou.",
          class: "secondary"
        },
        {
          id: 2,
          title: "Vysoká škola Bc. a Ing.",
          text:
            "Vysokú školu som začal študovať v roku 2008 a študoval som na Technickej univerzite v Košiciach a v rokoch 2008 až 2011 som študoval odbor automobilová výroba, kde som úspešne ukončil skúškou a získal som titul Bc.. Následne som začal štuovať odbor Inžinierstvo kvality produkcie, ktorý som ukončil v roku 2013 taktiež skúškou a získal som titul Ing.",
          class: "high"
        },
        {
          id: 3,
          title: "Zahraničie a Slovensko",
          text:
            "Po Vysokej škole som si otvoril živnosť so zameraním na elektortechnické práce na §21 elektrotechnik. V roku 2014 som šiel pracovať do Nemecka na stavbu ako elektrotechnik. Po pár mesiacoch som sa vrátil späť na Slovensko, kde som pracoval v rafinérii Slovnaft v Bratislave. Potom som pracoval cca mesiac v Holandsku, kde som sa taktiež venoval elektrotechnike.",
          class: "slovakia"
        },
        {
          id: 4,
          title: "Magneti Marelli",
          text:
            "V roku 2015 som začal pracovať v organizácii Magneti Marelli Slovakia s.r.o v Kechneci, kde som mal náplň práce vykonávanie procesného a výrobného auditu, koordinácia merania, vykonávanie vstupných a výstupných kontrol práce operátorov, pravidelný reporting o aktivitách, vybavovanie reklamácií. Pracovný pomer som ukončil v roku 2016",
          class: "magneti"
        },
        {
          id: 5,
          title: "Súčastnosť",
          text:
            "V júli 2016 som nastúpil ako zamestnanec pre Slovenskú firmu, kde pôsobím dodnes.",
          class: "now"
        }
      ],
      visibleSlide: 0
    };
  }
};
</script>

<style lang="scss" scoped>
#my-time-line {
  margin: 0;
  font-family: "Poppins", sans-serif;
  background: rgba(0, 0, 0, 0.8);
  min-height: 100vh;
}

h1,
h2,
h5,
p {
  font-family: "Poppins", sans-serif;
}

h1 {
  color: #fff;
  font-weight: 700;
  font-size: 2.1875em; /* 35/16 */
  padding-top: 3em;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 0.228em;
  line-height: 0.6574em;
  margin-bottom: 3em;
}

.wrapper {
  margin: auto;
  max-width: 100%;
  margin: 0 1em;
}

.row {
  display: block;
}

.timeline-bar {
  position: relative;
  width: 90%;
  margin: auto;
  height: 6.25em; /* 100/16 */
  margin-top: 4.0625em; /* 65/16 */
  padding-bottom: 3em;
  margin-bottom: 3em;

  ul {
    padding: 0;
    margin: 0;
    padding-top: 0.9375em; /* 15/16 */
    z-index: 2;
    position: absolute;
    width: 100%;
    margin-top: -2.5em; /* 40/16 */
  }

  li:before {
    content: " ";
    display: block;
    margin: auto;
    width: 2.727272727272727em; /* 30/11 */
    height: 2.727272727272727em; /* 30/11 */
    border-radius: 50%;
    border: solid 0.18181818181818182em #fff; /* 2/11 */
    transition: all ease 0.3s;
  }

  li.active:before,
  li:hover:before {
    border: solid 0.18181818181818182em #fff; /* 2/11 */
    background: #fff44f;
  }

  li {
    list-style: none;
    float: left;
    width: 20%;
    text-align: center;
    color: #000;
    text-transform: uppercase;
    font-size: 0.6875em; /* 11/16 */
    cursor: pointer;
    font-weight: 700;
    transition: all ease 0.2s;
    vertical-align: bottom;
    height: 5.454545454545454em; /* 60/11 */
    position: relative;
  }
}

li .step-inner {
  position: absolute;
  width: 100%;
  bottom: 0;
  font-size: 1.2727272727272727em; /* 14/11 */
  color: #fff;
}

li.active,
li:hover {
  color: #fff;
}

li:after {
  content: " ";
  display: block;
  width: 0.5454545454545454em; /* 6/11 */
  height: 0.5454545454545454em; /* 6/11 */
  background: #fff;
  margin: auto;
  border: solid 0.6363636363636364em #fff; /* 7/11 */
  border-radius: 50%;
  margin-top: 4.2727272727272725em; /* 47/11 */
  box-shadow: 0 0.18181818181818182em 1.1818181818181819em -0.09090909090909091em
    #fff; /* 2/11 */ /* 13/11 */ /* 1/11 */
  transition: all ease 0.2s;
}

li:hover:after {
  background: #fff;
}

li.active:after {
  background: #fff44f;
}

.line {
  width: 80%;
  margin: auto;
  background: #fff;
  height: 0.375em; /* 6/16 */
  position: absolute;
  left: 10%;
  top: 3.5625em; /* 57/16 */
  z-index: 1;
  border-radius: 3.125em; /* 50/16 */
  transition: all ease 0.9s;
}

.line-progress {
  content: " ";
  width: 3%;
  height: 100%;
  background: #fff44f;
  background: linear-gradient(to right, #fff44f 0%, #fff44f 100%);
  position: absolute;
  z-index: 2;
  border-radius: 3.125em; /* 50/16 */
  transition: all ease 0.9s;
}

.lineOne {
  width: 25%;
}

.lineTwo {
  width: 50%;
}

.lineThree {
  width: 75%;
}

.lineFour {
  width: 100%;
}

.sections {
  width: 90%;
  margin: auto;
  background: #f3f3f3;
  border-radius: 0.25em; /* 4/16 */
}

@media (max-width: 1180px) {
  li .step-inner {
    font-size: 1em;
  }
}

@media (max-width: 930px) {
  .line {
    display: none;
  }

  li .step-inner {
    font-size: 1em;
    bottom: 4em;
    margin-left: 1em;
  }

  .verticalLine {
    width: 0.6em;
    height: 26.9em;
    background: #fff;
    position: absolute;
    z-index: 1;
  }

  .line-progress-vertical {
    content: " ";
    width: 0.6em;
    height: 4%;
    background: #fff44f;
    background: linear-gradient(to right, #fff44f 0%, #fff44f 100%);
    position: absolute;
    z-index: 2;
    border-radius: 3.125em; /* 50/16 */
    transition: all ease 0.9s;
  }

  .timeline-bar {
    position: absolute;
    margin-top: -1.5em;
  }

  .timeline-bar li {
    float: none !important;
  }

  .sections {
    width: 50%;
    margin: auto;
    background: #f3f3f3;
    border-radius: 0.25em; /* 4/16 */
    margin-right: 20%;
  }

  li:after {
    margin-left: -0.2em;
    z-index: 5;
  }
  li:before {
    display: none !important;
  }

  .verticalOne {
    height: 27%;
  }

  .verticalTwo {
    height: 52%;
  }

  .verticalThree {
    height: 76%;
  }

  .verticalFour {
    height: 100%;
  }
}

@media (max-width: 755px) {
  .sections {
    width: 65%;
    margin-right: 9%;
  }

  h1 {
    font-size: 1.5em;
  }
}

@media (max-width: 755px) {
  .sections {
    margin-right: 1%;
  }
}
</style>
