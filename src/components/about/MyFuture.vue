<template>
  <div id="my-future">
    <h1>Moja Vízia</h1>
    <b-container fluid>
      <b-row align-h="center">
        <b-col class="box" lg="3">
          <h2>01</h2>
          <h3>Ako som sa učil</h3>
          <p>
            Programovanie som sa učil cez kurzy na
            <a class="learn" href="https://www.learn2code.sk"
              >www.learn2code.sk</a
            >. Ako asi každý začal som s Webrebel 1 a Základy programovania.
          </p>
        </b-col>
        <b-col class="box" lg="3">
          <h2>02</h2>
          <h3>Súčastnosť</h3>
          <p>
            Momentálne sa snažim naučiť Javascript a popritom ešte framework
            Vue.js od Yablka. Nakoľko vo Webrebel 1 bolo intro do Jquery tak som
            si chcel vyskúšať aj čistý Javascript. Avšak čistý Javascript je
            dosť ťažký tak som vyskúšal Vue.js
          </p>
        </b-col>
        <b-col class="box" lg="3">
          <h2>03</h2>
          <h3>Čo by som chcel</h3>
          <p>
            V budúcnosti by som si chcel nájsť popri mojej terajšej práci aj
            privyrobenie ako programátor a neskôr by som možno chcel dostať aj
            do firmy kde by som pracoval na Fulltime.
          </p>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
}
#my-future {
  //display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: linear-gradient(
    rgba(0, 0, 0, 0.8),
    rgba(0, 0, 0, 0.8) 50%,
    #fff 50%,
    #fff 100%
  );
}

.width {
  display: flex;
  margin-top: 1em;
  justify-content: center;
  height: 100%;
  margin: 0 6em;
  text-align: left;
}

.container {
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

.box {
  position: relative;
  width: 20em /* 320/16 */;
  background: #fff;
  padding: 6.25em 1.875em 3.75em; /* 100/16 */ /* 30/16 */ /* 60/16 */
  margin: 0em 2.5em; /* 0/16 */ /* 40/16 */
  box-shadow: 0 0.9375em 2.8125em rgba(0, 0, 0, 0.1); /* 15/16 */ /* 45/16 */
}
.box:before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #fff44f;
  transform: scaleY(0);
  transform-origin: top;
  transition: transform 0.5s;
}

.box:hover:before {
  transform: scaleY(1);
  transform-origin: bottom;
  transition: transform 0.5s;
}
.box h2 {
  position: absolute;
  left: 40px;
  top: 60px;
  font-size: 4em;
  font-weight: 800;
  z-index: 1;
  opacity: 0.1;
  transition: 0.5s;
  color: #ccc;
}

.box:hover h2 {
  opacity: 1;
  color: rgba(0, 0, 0, 0.7);
  transform: translateY(-40px);
}

.box h3 {
  position: relative;
  font-size: 1.5em;
  z-index: 2;
  color: #333;
  transition: 0.5s;
  padding-bottom: 0.5em;
  color: #ccc;
}

.box p {
  position: relative;
  z-index: 2;
  color: #555;
  transition: 0.5s;
  line-height: 1.5em;
  color: #ccc;
}
.box:hover p,
.box:hover h3 {
  color: rgba(0, 0, 0, 0.7);
}

a {
  color: #ccc;
  text-decoration: none;
}

h1 {
  color: #fff;
  font-weight: 700;
  font-size: 2.1875em; /* 35/16 */
  padding: 2em 0;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 0.228em;
  line-height: 0.6574em;
}

@media (max-width: 992px) {
  .box:last-child {
    margin-top: 5%;
    margin-bottom: 5%;
  }
}

@media (max-width: 817px) {
  .box:nth-child(2) {
    margin-top: 5%;
    margin-bottom: 5%;
  }
  .box {
    width: 100%;
  }
}
</style>
