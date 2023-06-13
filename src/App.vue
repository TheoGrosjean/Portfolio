<template>
  <div class="desktop">
    <NavBar />
    <LandingVue />
    <About />
    <Competences />
    <Experiences/>
  </div>
</template>

<script>
  import LandingVue from "./components/LandingVue.vue";
  import NavBar from "./components/NavBar.vue";
  import Competences from "./components/CompetencesVue.vue";
  import About from "./components/AboutVue.vue";
import Experiences from "./components/Experiences.vue";
  export default {
    name: "App",
    components: {
    LandingVue,
    NavBar,
    About,
    Competences,
    Experiences
},
  };
</script>

<style>
  @keyframes profilImg {
    0% {
      box-shadow: 0px 0px rgba(255, 255, 255, 0.507);
      filter: blur(5px) grayscale(1);
    }
    100% {
      box-shadow: -50px -40px 80px rgba(255, 255, 255, 0.507);
      filter: blur(0px) grayscale(1);
    }
  }
  @keyframes txtAbout {
    0% {
      opacity: 0;
      filter: blur(5px) grayscale(1);
    }
    100% {
      opacity: 1;
      filter: blur(0px) grayscale(1);
    }
  }
  body {
    top: 0;
    left: 0;
    background-color: black;
    margin: 0;
    overflow-x: hidden;
  }
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    font-weight: bold;
    color: #ffffff;
    overflow: hidden;
  }
</style>
