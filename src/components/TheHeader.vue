<template>
  <b-navbar
    toggleable="lg "
    type="info"
    class="fixed-top animate__animated "
    :class="{
      topScroll: scrollPosition < 100,
      navbarScroll: scrollPosition > 100,
      animate__fadeIn: scrollPosition > 100
    }"
  >
    <b-navbar-brand :to="'/'" class="logo">
      <img src="../assets/logos/logo4.png" alt="Kitten" />
    </b-navbar-brand>

    <b-navbar-toggle target="nav-collapse">
      <i class="fas fa-bars styleIcon"></i>
    </b-navbar-toggle>
    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav class="ml-auto">
        <b-nav-item :to="'/'">Domov</b-nav-item>
        <b-nav-item :to="'about'">O mne</b-nav-item>
        <!-- 	<b-nav-item-dropdown class="dropdown"  text="O mne" left>
					 	<b-dropdown-item :to="'about'" >Úvod </b-dropdown-item>
						<b-dropdown-item href="#my-skills" >Skúsenosti </b-dropdown-item>
						<b-dropdown-item href="#my-time-line" >Životopis </b-dropdown-item>
						<b-dropdown-item href="#my-future">Vízia </b-dropdown-item>
						<b-dropdown-item href="#references">Referencie </b-dropdown-item>
						<b-dropdown-item href="#footer">Záver</b-dropdown-item>
					</b-nav-item-dropdown>
        <b-nav-item :to="'gallery'">Galéria</b-nav-item>-->
        <b-nav-item :to="'somethings'">Trailery</b-nav-item>
        <b-nav-item :to="'contact'">Kontakt</b-nav-item>

        <!-- <router-link   to="/">Domov</router-link>
					 <router-link   to="/about">O mne</router-link>
					<router-link   to="/gallery">Galéria</router-link>
					<router-link   to="/somethings">Trailery</router-link>
					<router-link   to="/contact">Kontakt</router-link> -->
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {
  data() {
    return {
      scrollPosition: null
    };
  },
  methods: {
    updateScroll() {
      this.scrollPosition = window.scrollY;
    }
  },

  mounted() {
    window.addEventListener("scroll", this.updateScroll);
  }
};
</script>

<style lang="scss" scoped>
//  ::v-deep .nav-link {
//    color: #ffec3d!important;
// }

.dropdown {
  margin-top: -0.4em;
  font-size: 1.2em;
}

.fixed-top {
  padding-top: 0.5em 0;
  background-color: #0f0f0fb3;
}

.topScroll {
}

.navbarScroll {
  background-color: #41bfb7b3;
  border-bottom: 1px solid #000;
  transition: 0.5 all;
}

a {
  //font-family: "Sansita Swashed", cursive;
  color: #fff44f;
  //padding: 0 1.25em;
  font-size: 1.2em;
}

li a:hover,
li a:focus,
a:hover,
a:focus {
  color: #fff;
}

a:after {
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
}

button,
button:hover,
button:focus {
  border: 2px solid #fff44f;
}

.fa-bars:hover {
  color: #fff;
}

.fa-bars {
  color: #fff44f;
}

.logo {
  font-family: "Sansita Swashed", cursive;
  font-size: 1.4em;
}

.navbar-dark .navbar-toggler-icon {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='30' height='30' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%28255, 244, 79, 1%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e") !important;
}

.styleIcon {
  color: #fff44f;
  font-size: 1.2em;
}

img {
  max-width: 110px;
  height: auto;
}

@media (max-width: 992px) {
  li a:hover,
  li a:focus,
  a:hover,
  a:focus {
    color: #fff;
    text-decoration: underline;
  }

  a:after {
    display: none;
  }
}

/*
@media(max-width: 744px) {

.navbar-nav a {
	padding: 0.2em 44%;
  }

}

@media(max-width: 540px) {

.navbar-nav a {
	padding: 0.2em 41%;
  }

} */

/*

.active:not(.show) {
	display: block;
}

.animation {
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translateX(-150%) translateY(-50%);
	border-radius: 50%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	text-align: center;
	transition: .6s;
}
 */

/* DropDown

li a{
	color: #ffeb3bbd;
}

.dropdown-menu {
	background-color: #ffec3d;
}
 */
</style>
