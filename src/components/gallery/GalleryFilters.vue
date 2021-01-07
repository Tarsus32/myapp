<template>
  <div class="filters">
    <div class="menu">
      <ul>
        <li
          v-for="(val, key) in option.getFilterData"
          class="button"
          :key="key"
          :class="[key === filterOption ? 'is-checked' : '']"
          @click="filter(key)"
        >
          <a>{{ key }}</a>
        </li>
      </ul>
    </div>
    <div class="images ">
      <isotope
        ref="cpt"
        id="root_isotope1"
        :item-selector="'element-item'"
        :list="list"
        :options="option"
        @filter="filterOption = arguments[0]"
      >
        <gallery-img
          v-for="(image, index) in list"
          :key="index"
          :image="image"
          :class="[image.category]"
          :style="{ left: '3em' }"
        />
      </isotope>
    </div>
  </div>
</template>

<script>
import GalleryImg from "@/components/gallery/GalleryImg.vue";
import isotope from "vueisotope";
export default {
  components: {
    GalleryImg,
    isotope
  },
  data() {
    return {
      list: [
        {
          name: "Pláž",
          img: "nature1.jpg",
          category: "Príroda"
        },
        {
          name: "žena na párty",
          img: "people1.jpg",
          category: "Ľudia"
        },
        {
          name: "Mercury",
          img: "city1.jpg",
          category: "Mestá"
        },
        {
          name: "Mercury",
          img: "holiday1.jpg",
          category: "Dovolenky"
        },
        {
          name: "Mercury",
          img: "animals1.jpg",
          category: "Zvieratá"
        }
      ],
      selected: null,
      filterOption: "Všetko",
      count: 0,
      option: {
        itemSelector: ".element-item",
        getFilterData: {
          Všetko() {
            return true;
          },
          Príroda(el) {
            return el.category === "Príroda";
          },
          Ľudia(el) {
            return el.category === "Ľudia";
          },
          Mestá(el) {
            return el.category === "Mestá";
          },
          Dovolenky(el) {
            return el.category === "Dovolenky";
          },
          Zvieratá(el) {
            return el.category === "Zvieratá";
          }
        }
      }
    };
  },
  methods: {
    filter(key) {
      this.$refs.cpt.filter(key);
    }
  }
};
</script>

<style lang="scss" scoped>
ul {
  padding: 0;
  margin-top: 2em;
}

li {
  list-style: none;
  margin-left: 2em;
  display: inline-block;
}

a {
  text-align: left;
  padding: 15px 0;
  cursor: pointer;
  font-size: 17px;
  font-weight: 500;
  color: #fff;
  text-transform: capitalize;
  transition: all 0.3s ease-in-out;
  text-decoration: none;
  width: 10%;
}

li:hover,
li:focus {
  color: #ffec3d;
  text-decoration: underline;
}

.images {
  margin-left: 2em;
}

/* a:after {
  display: block;
  content: "";
  border-bottom: solid 3px #fff;
  transform: scaleX(0);
  transition: transform 250ms ease-in-out;
  transform-origin: 100% 50%;
}
a:hover:after {
  transform: scaleX(1);
  transform-origin: 0 50%;
} */
</style>
