<template>
  <div class="contact">
    <b-container>
      <h1 class="animate__animated animate__tada">Kontaktujte ma</h1>
      <p class="primary">
        Ak sa Vám stránka páčila, kontaktujte ma. Mám záujem sa vzdelávať vo
        web-technológiách.
      </p>

      <b-row>
        <b-col class="contactInfo" md="4" align-self="center">
          <div class="box">
            <a href="tel:+421910993718">
              <div class="icon animate__animated animate__fadeInDown">
                <i class="fas  fa-phone "></i>
              </div>
              <div class="text animate__animated animate__fadeInUp">
                <h3>Telefón</h3>
                <p>+421 910 993 718</p>
              </div>
            </a>
          </div>
          <div class="box ">
            <a href="mailto:milan.gmitro32@gmail.com">
              <div class="icon animate__animated animate__fadeInDown">
                <i class="far  fa-envelope "></i>
              </div>

              <div class="text animate__animated animate__fadeInUp">
                <h3>Email</h3>
                <p>milan.gmitro32@gmail.com</p>
              </div>
            </a>
          </div>
          <div class="box">
            <a href="https://www.facebook.com/milan.gmitro">
              <div class="icon animate__animated animate__fadeInDown">
                <i class="fab  fa-facebook "></i>
              </div>
              <div class="text animate__animated animate__fadeInUp">
                <h3>Facebook</h3>
                <p>Milan Gmitro</p>
              </div>
            </a>
          </div>
        </b-col>
        <b-col class="contactForm" md="4" sm="6" offset-md="2">
          <form action="https://formspree.io/f/mwkwalrg" method="POST">
            <h2>Poslať správu</h2>
            <div class="inuptBox">
              <input type="text" name="name" required="required" />
              <span>Meno a priezvisko</span>
            </div>
            <div class="inuptBox">
              <input type="text" name="_replyto" required="required" />
              <span>Email</span>
            </div>
            <div class="inuptBox">
              <textarea required="required" name="message"></textarea>
              <span>Napíš mi </span>
            </div>
            <div class="inuptBox btn">
              <input type="submit" name="" value="Poslať" />
            </div>
          </form>
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
  font-family: "Poppins", sans-serif;
}

.contact {
  position: relative;
  min-height: 100vh;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  display: flex;
  background: url("../../assets/backgrounds/wait-bckg.jpg");
  background-size: cover;
}
.container-fluid {
  display: flex;
  justify-content: center;
}

h1 {
  margin-top: 2em;
  font-size: 3em;
  font-weight: 500;
  color: #fff;
}

p {
  font-size: 1.2rem;
  font-weight: 100;
  color: #fff;
}

a {
  text-decoration: none;
}

.primary {
  margin-bottom: 4em;
}

.contactInfo {
  //width: 50%;
  display: inline-block;
  flex-direction: column;
  margin-left: 10%;
}
.box {
  position: relative;
  padding: 1.25em 0; /* 20/16 */
  display: flex;
}
.icon {
  min-width: 60px;
  height: 60px;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  font-size: 22px;
  color: rgba(0, 0, 0, 0.8);
}

.text {
  display: flex;
  margin-left: 20px;
  font-size: 1em;
  color: #fff;
  flex-direction: column;
  font-weight: 300;
  text-align: left;
}
.text,
.icon {
  display: inline-block;
}
h3 {
  font-weight: 500;
  color: #fff44f;
}

.svg-inline--fa {
  margin-top: 0.9em;
}

.contactForm {
  //width: 40%;
  padding: 40px;
  background-color: #fff;
}

.inuptBox {
  position: relative;
  width: 100%;
  margin-top: 10px;
}

input,
textarea {
  width: 100%;
  padding: 8px 0;
  font-size: 1em;
  border: none;
  border-bottom: 2px solid #333;
  outline: none;
  resize: none;
}

span {
  position: absolute;
  left: 0;
  padding: 5px 0;
  font-size: 1em;
  margin: 10px 0;
  pointer-events: none;
  transition: 0.5s;
  color: #666;
}

input[type="submit"] {
  width: 100px;
  background: #fff44f;
  color: #666;
  font-weight: 700;
  border: none;
  cursor: pointer;
  padding: 10px;
  font-size: 18px;
  border-radius: 10%;
}

.btn {
  margin-top: 1em;
}

input:focus ~ span,
input:valid ~ span,
textarea:focus ~ span,
textarea:valid ~ span {
  color: #e91e63;
  font-size: 12px;
  transform: translateY(-20px);
}

a h3:hover,
a h3:focus {
  color: #fff;
}

a p:hover,
a p:focus {
  color: #fff44f;
}

.icon:hover,
.icon:focus {
  background-color: #000;
  color: #fff44f;
}

@media (max-width: 1200px) {
  .box {
    width: 21.875em; /* 350/16 */
  }
}

@media (max-width: 992px) {
  .contactInfo {
    margin-left: 0;
  }
  .contactForm {
    margin-left: 15%;
    flex: 0 0 40%;
    max-width: 50%;
  }
}

@media (max-width: 768px) {
  .contactForm {
    max-width: 100%;
    margin: 5% 0 10% 0;
    flex: auto;
  }

  .box {
    margin: 0 auto;
  }

  h1 {
    font-size: 2.5em;
    margin-top: 3em;
  }
}
</style>
