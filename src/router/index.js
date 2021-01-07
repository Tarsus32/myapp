///deps
import Vue from "vue";
import VueRouter from "vue-router";

//views
import Home from "../views/Home.vue";

/*import About from "../views/About.vue";
import Gallery from "../views/Gallery.vue";
import Somethings from "../views/Somethings.vue";
import Contact from "../views/Contact.vue";*/

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    //component: About
    component: () =>
      import(/* webpackChunkName:  "About" */ "@/views/About.vue")
  },
  /*{
    path: "/gallery",
    name: "Gallery",
    //component: Gallery
    component: () =>
      import(/*webpackChunkName: "Gallery"  "@/views/Gallery.vue")
  },*/
  {
    path: "/Somethings",
    name: "Somethings",
    // component: Somethings
    component: () =>
      import(/* webpackChunkName: "Somethings" */ "@/views/Somethings.vue")
  },
  {
    path: "/contact",
    name: "Contact",
    //component: Contact
    component: () =>
      import(/* webpackChunkName: "Contact" */ "@/views/Contact.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
