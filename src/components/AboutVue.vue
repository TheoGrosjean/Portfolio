<template>
  <div id="about" class="container">
    <img id="imageProfil" src="@/assets/theo.jpg" alt="me" />
    <div id="aboutText" class="text">
      <h1>About</h1>
      <p>
        My name is Théo and I am passionate about web development. Currently in
        my fourth year at Epitech, I have gained solid experience in web
        development through my academic journey and my work experience in
        alternance. I am always looking for new challenges to improve my
        technical skills and develop my creativity. I have a curious and
        persevering mind, and I am constantly searching for innovative solutions
        and new techniques.
      </p>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        animate: true,
      };
    },
    mounted() {
      window.addEventListener("scroll", this.handleScroll);
    },
    methods: {
      handleScroll() {
        const image = document.getElementById("imageProfil");
        const txt = document.getElementById("aboutText");
        const position = image.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (position < windowHeight && this.animate) {
          this.animate = false;
          txt.style.animation = "txtAbout 0.5s linear forwards";
          image.style.animation = "profilImg 0.5s linear forwards";
        }
      },
    },
  };
</script>

<style scoped>
  .text {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 900px;
    /* animation: oui 1s linear forwards; */
  }
  img {
    height: 50vw;
    max-height: 700px;
    /* animation: profilImg 1s linear forwards; */
  }

  p {
    font-weight: lighter;
    font-size: 1.5em;
    width: 50%;
  }
  .container {
    width: 100vw;
    flex-wrap: wrap;
    display: flex;
    color: white;
    align-items: center;
    justify-content: center;
    background-color: rgb(26, 26, 26);
    padding-top: 100px;
    padding-bottom: 100px;
  }
</style>
