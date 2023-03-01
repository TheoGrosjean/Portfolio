<template>
  <div id="home" class="container">
    <span class="bg"></span>
    <h1>Théo Grosjean</h1>
    <h2>Front-end Developer</h2>
    <p>scroll down</p>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      class="w-6 h-6"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5"
      />
    </svg>
  </div>
</template>

<script>
  export default {
    name: "LandingVue",
  };
</script>

<style scoped>
  p {
    position: absolute;
    bottom: 45px;
    z-index: 1;
    opacity: 0.2;
  }
  svg {
    position: absolute;
    bottom: 100px;
    width: 40px;
    z-index: 1;
    opacity: 0.3;
    animation: arrow 2s ease-in-out infinite alternate;
  }
  h1,
  h2 {
    text-align: center;
    animation: title 2s ease-in-out;
  }
  @keyframes arrow {
    0% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(50%);
    }
  }
  @keyframes title {
    0% {
      opacity: 0;
      transform: translateY(-100%);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
  .bg {
    height: 100%;
    width: 100%;
    background-image: url("@/assets/pc.jpg");
    opacity: 0.2;
    filter: grayscale(1) blur(10px);
    background-size: cover;
    position: absolute;
    z-index: 0;
  }
  .container {
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
</style>
