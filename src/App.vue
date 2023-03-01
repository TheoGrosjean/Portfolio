<template>
  <NavBar />
  <LandingVue />
  <About />
</template>

<script>
  import LandingVue from "./components/LandingVue.vue";
  import NavBar from "./components/NavBar.vue";
  import About from "./components/AboutVue.vue";

  export default {
    name: "App",
    components: {
      LandingVue,
      NavBar,
      About,
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
  }  @keyframes txtAbout {
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
  }
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    font-weight: bold;
    color: #ffffff;
    overflow-y: scroll;
    overflow-x: hidden;
  }
  h1 {
    font-size: calc(7000vw / 1018);
    z-index: 1;
  }
  h2 {
    font-size: calc(4000vw / 1018);
    z-index: 1;
    letter-spacing: calc(2500vw / 1018);
  }
  h2::first-letter {
    padding-left: calc(2500vw / 1018);
  }
</style>
