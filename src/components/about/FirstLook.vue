<template>
  <div id="first-look">
    <h1 class="main animate__animated animate__jackInTheBox">Niečo o mne</h1>
    <div class="width">
      <div class="content">
        <article>
          <h3 class="animate__animated animate__fadeInLeft ">
            Ahojte,
          </h3>
          <h3 class="animate__animated  animate__fadeInLeft ">
            Ja som Milan,
          </h3>
          <p class="typed-text animate__animated animate__fadeInRight">
            Junior{{ typeValue }}
          </p>
          <p
            class="cursor animate__animated animate__fadeInRight"
            :class="{ typing: typeStatus }"
          >
            &nbsp;
          </p>

          <h2 id="writting"></h2>
          <div class="btn">
            <a href="#/contact">Kontaktuj ma</a>
            <a href="../../assets/pdf/CV.pdf" download>Stiahni CV</a>
          </div>
        </article>
      </div>
    </div>
  </div>
</template>

<script>
import { setTimeout } from "timers";
export default {
  data: () => {
    return {
      typeValue: "",
      typeStatus: false,
      typeArray: [
        " Front-end Developer",
        " Web Developer",
        " Back-end Developer"
      ],
      typingSpeed: 100,
      erasingSpeed: 100,
      newTextDelay: 2000,
      typeArrayIndex: 0,
      charIndex: 0,
      email: "milan.gmitro@gmail.com"
    };
  },
  methods: {
    typeText() {
      if (this.charIndex < this.typeArray[this.typeArrayIndex].length) {
        if (!this.typeStatus) this.typeStatus = true;
        this.typeValue += this.typeArray[this.typeArrayIndex].charAt(
          this.charIndex
        );
        this.charIndex += 1;
        setTimeout(this.typeText, this.typingSpeed);
      } else {
        this.typeStatus = false;
        setTimeout(this.eraseText, this.newTextDelay);
      }
    },
    eraseText() {
      if (this.charIndex > 0) {
        if (!this.typeStatus) this.typeStatus = true;
        this.typeValue = this.typeArray[this.typeArrayIndex].substring(
          0,
          this.charIndex - 1
        );
        this.charIndex -= 1;
        setTimeout(this.eraseText, this.erasingSpeed);
      } else {
        this.typeStatus = false;
        this.typeArrayIndex += 1;
        if (this.typeArrayIndex >= this.typeArray.length)
          this.typeArrayIndex = 0;
        setTimeout(this.typeText, this.typingSpeed + 1000);
      }
    }
  },
  created() {
    setTimeout(this.typeText, this.newTextDelay + 200);
  }
};
</script>

<style lang="scss" scoped>
#first-look {
  background: url("../../assets/backgrounds/about-backg.jpg");
  //background-attachment: fixed;
  background-color: #ccc;
  background-size: cover;
  background-position: 50% 75%;
  height: 100vh;
  font-size: 1em;
  font-weight: bold;
  letter-spacing: 1px;
  overflow: hidden;
  font-family: "Poppins", sans-serif;
}

.width {
  display: flex;
  margin-top: 7em;
  justify-content: center;
  height: 100%;
  margin-left: 6em;
  text-align: left;
}

.content {
  width: 100%;
  color: #fff;
}

h1,
h2,
h3,
p {
  font-family: "Poppins", sans-serif;
}

h1 {
  margin-top: 2em;
  font-size: 3em;
  color: #fff;
}

p {
  margin-top: 1em;
  font-size: 3em;
}

h3 {
  font-size: 1.5em;
  margin: 0.3em 0;
  font-weight: 800;
}

h2 {
  font-size: 3em;
  font-weight: 800;
}

.main {
}

.btn {
  margin-top: 3.75em; /* 60/16 */
}
.btn a {
  text-align: center;
  display: inline-block;
  margin: 1em 2em; /* 15/15 */ /* 30/15 */
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

.btn a:hover {
  background-color: #fff44f;
  color: #fff;
}

h1 .typed-text {
  color: #d2b94b;
  font-size: 4em;
}
h1 .cursor {
  display: inline-block;
  margin-left: 3px;
  width: 4px;
  background-color: #fff;
  animation: cursorBlink 1s infinite;
}
h1.cursor.typing {
  animation: none;
}

@keyframes cursorBlink {
  49% {
    background-color: #fff;
  }
  50% {
    background-color: transparent;
  }
  99% {
    background-color: transparent;
  }
}

@media (max-width: 800px) {
  p {
    font-size: 2em;
  }

  h1 {
    margin-top: 3em;
    font-size: 2em;
  }

  h2 {
    font-size: 1.1em;
  }
}

@media (max-width: 650px) {
  .width {
    margin: 0 auto;
  }

  .btn {
    margin-top: 2em;
    margin-left: 32%;
  }

  .btn a {
    display: block;
    margin: 0;
    margin-bottom: 25%;
  }

  h1 {
    margin-bottom: 10%;
  }

  p,
  h3 {
    margin-left: 20%;
  }

  p {
    margin-top: 10%;
  }
}

@media (max-width: 572px) {
  #first-look {
    height: auto;
  }
  p,
  h3 {
    margin-left: 10%;
  }

  p {
    font-size: 1.2em;
  }

  h1 {
    margin-top: 3em;
    margin-bottom: 2em;
    font-size: 2.5em;
  }

  h2 {
    font-size: 1.1em;
  }

  .btn {
    margin-top: 2em;
    margin-left: 20%;
  }
}
</style>
