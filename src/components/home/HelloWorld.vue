<template>
  <div class="hello">
    <div class="content  ">
      <h1 class="animate__animated animate__tada">
        Welcome on my <br />
        website
      </h1>

      <p>
        Táto stránka je vytvorená za účelom skúšania si nových vecí, ktoré som
        sa naučil cez kurzy z
        <a class="learn" href="https://www.learn2code.sk">www.learn2code.sk</a>.
        A najviac ďakujem lektorovy <strong> Yablkovy</strong>, ktorý dokáže
        učiť nie len pútavo ale aj humorne. Za čo mu patrí veľka vďaka.
      </p>

      <h3>Ak sa chceš o mne dozvedieť viac klikni na tlačidlo pod textom</h3>
      <div class="button animate__animated animate__rubberBand">
        <a href="#/about" class="btn">Read more</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

h3 {
  color: #fff44f;
  font-family: "Poppins", sans-serif;
  font-size: 1.5em;
}

strong {
  color: #fff44f;
  font-weight: 800;
}

.learn {
  color: #fff44f;
  font-weight: 600;
}
.content {
  margin-top: 5em;
  text-align: center;
  padding: 2rem;
  z-index: 1;
}

.content h1 {
  color: #fff44f;
  font-family: "Poppins", sans-serif;
  font-weight: 800;
  font-size: 5rem;
  letter-spacing: -1px;
  margin-bottom: 0.8rem;
  text-transform: uppercase;
}

.content p {
  color: #fff;
  font-size: 1.2rem;
  font-weight: 100;
  padding: 0.5em 8em;
  text-align: center;
}

.btn {
  padding: 0.75rem 1.25rem;
  text-transform: uppercase;
  color: #fff44f;
  font-weight: 550;
  font-size: 1.1rem;
  font-family: "Roboto", sans-serif;
  text-decoration: none;
  background-color: #111;
  display: inline-block;
  margin-top: 0.8rem;
  cursor: pointer;
  transition: 0.3s;
}

.btn:hover {
  opacity: 0.8;
}

.button {
  margin-bottom: 5em;
}

@media (max-width: 950px) {
  .content p {
    font-size: 0.9rem;
    padding: 0.5em 3em;
  }

  h3 {
    font-size: 1.1em;
  }

  .content h1 {
    margin-top: 2em;
    font-size: 4rem;
  }

  .btn {
    padding: 0.6rem 1rem;
    font-size: 0.9rem;
    margin-top: 0.6rem;
  }
}

@media (max-width: 675px) {
  .content p {
    font-size: 0.7rem;
    padding: 0.5em 3em;
  }

  h3 {
    font-size: 0.9em;
  }

  .content h1 {
    margin-top: 3em;
    font-size: 2.5rem;
  }

  .btn {
    padding: 0.6rem 1rem;
    font-size: 0.9rem;
    margin-top: 0.6rem;
  }
}

@media (max-width: 360px) {
  .content h1 {
    margin-top: 1em;
  }
}
</style>
