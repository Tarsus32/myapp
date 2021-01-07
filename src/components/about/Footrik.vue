<template>
  <div id="footer">
    <section class="text numbers">
      <div class="iCountUp">
        <ICountUp
          class="counter animate__animated animate__zoomIn"
          :delay="work.delay"
          :endVal="work.endVal"
          :options="work.options"
          @ready="onReadyWorks"
        />
        <p>Hodiny Práce</p>
      </div>
      <div class="iCountUp animate__animated animate__zoomIn">
        <ICountUp
          class="counter"
          :delay="coffe.delay"
          :endVal="coffe.endVal"
          :options="coffe.options"
          @ready="onReadyCoffes"
        />
        <p>Šálky Kávy</p>
      </div>
      <div class="content-counter animate__animated animate__zoomIn">
        <ICountUp
          class="counter"
          :delay="learn.delay"
          :endVal="learn.endVal"
          :options="learn.options"
          @ready="onReadyLearn"
        />
        <p>Hodiny Učenia</p>
      </div>
      <div class="content-counter  animate__animated animate__zoomIn">
        <ICountUp
          class="counter"
          :delay="finish.delay"
          :endVal="finish.endVal"
          :options="finish.options"
          @ready="onReadyFinish"
        />
        <p>Dokončené Projekty</p>
      </div>
    </section>
    <section class="pre-footer">
      <div class="content">
        <p>
          <strong>Zaujal Vás tento projekt?</strong> <br />
          Jednoducho mi napíšte.
        </p>
        <ul class="menu contact animate__animated animate__flipInX">
          <li>
            <a href="mailto:milan.gmitro32@gmail.com"
              ><fa-icon :icon="['fas', 'envelope']" size="2x" />Email</a
            >
          </li>
          <li>
            <a href="https://www.facebook.com/milan.gmitro"
              ><fa-icon :icon="['fab', 'facebook']" size="2x" />Facebook</a
            >
          </li>
          <li>
            <a href="https://twitter.com/user"
              ><fa-icon :icon="['fab', 'twitter']" size="2x" />Twitter</a
            >
          </li>
          <li>
            <a href="https://github.com/Tarsus32"
              ><fa-icon :icon="['fab', 'github']" size="2x" />GitHub</a
            >
          </li>
        </ul>
      </div>
    </section>
    <footer class="global-footer">
      <p>
        Vyrobil
        <a href="mailto:milan.gmitro32@gmail.com">Milan Gmitro</a> &#169; 2020
      </p>
    </footer>
  </div>
</template>

<script>
import ICountUp from "vue-countup-v2";
export default {
  components: {
    ICountUp
  },
  data() {
    return {
      work: {
        delay: 10,
        endVal: 850,
        options: {
          useEasing: true,
          useGrouping: true
        }
      },
      coffe: {
        delay: 10,
        endVal: 1153,
        options: {
          useEasing: true,
          useGrouping: true
        }
      },
      learn: {
        delay: 10,
        endVal: 956,
        options: {
          useEasing: true,
          useGrouping: true
        }
      },
      finish: {
        delay: 10,
        endVal: 224,
        options: {
          useEasing: true,
          useGrouping: true
        }
      }
    };
  },

  methods: {
    onReadyWorks: function(instance) {
      const that = this.work;
      instance.update(that.endVal);
    },
    onReadyCoffes: function(instance) {
      const that = this.coffe;
      instance.update(that.endVal);
    },
    onReadyLearn: function(instance) {
      const that = this.learn;
      instance.update(that.endVal);
    },

    onReadyFinish: function(instance) {
      const that = this.finish;
      instance.update(that.endVal);
    }
  }
};
</script>

<style lang="scss" scoped>
.pre-footer {
  color: #fff;
  background: rgba(0, 0, 0, 0.8);
  text-align: center;
}
.content {
  padding: 2.5em 0 3.75em 0; /* 40/16 */ /* 60/16 */
}

.pre-footer p {
  font-size: 1em;
  text-transform: uppercase;
  line-height: 1.875em; /* 30/16 */
  padding-bottom: 1.25em; /* 20/16 */
}

strong {
  font-size: 1.375em; /* 22/16 */
  font-weight: 600;
  text-transform: none;
}

.contact li {
  margin-right: 0;
  list-style: none;
  display: inline-block;
}

p {
  font-family: "Poppins", sans-serif;
}

ul {
  padding-left: 0;
}

.contact a {
  text-decoration: none;
  color: #fff;
  padding-right: 1.2em;
}
.contact a:hover,
.contact a:focus {
  color: #fff44f;
}
svg {
  margin-right: 0.3em;
}
footer {
  text-align: right;
  padding-right: 0.5em;
  font-size: 0.75em; /* 12/16 */
}

footer a {
  color: #000;
  text-decoration: none;
}

.footer a:hover,
.footer a:focus {
  color: #fff44f;
}

.text {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  padding: 1.875em 0; /* 30/16 */
}

.iCountUp {
  padding: 0.625em; /* 10/16 */
}

.counter {
  font-size: 4.0625em; /* 65/16 */
  font-weight: 800;
  margin: 0.15384615384615385em/1em 0; /* 10/65 */ /* 65/65 */
}

p {
  font-size: 1.1875em; /* 19/16 */
}

@media (max-width: 770px) {
  .counter {
    font-size: 2em;
  }

  p {
    font-size: 1em;
  }
}

@media (max-width: 600px) {
  .counter {
    font-size: 3em;
  }

  p {
    font-size: 1.2em;
  }

  .text {
    display: block;
    padding: 0;
  }
  .iCountUp {
    display: inline-block;
    margin: 2em;
  }

  .content-counter {
    display: inline-block;
    margin: 2em;
  }
}

@media (max-width: 520px) {
  .fa-2x {
    font-size: 1.2em;
  }
}

@media (max-width: 474px) {
  .counter {
    font-size: 1.5em;
  }

  p {
    font-size: 0.8em;
  }
  .iCountUp,
  .content-counter {
    margin: 1.5em;
  }
}

@media (max-width: 430px) {
  a {
    font-size: 0.8em;
  }
  .fa-2x {
    font-size: 1.2em;
  }
}
</style>
