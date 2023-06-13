<template>
  <div id="home" class="bg">
    
    <h1>Théo Grosjean</h1>
    <h2>
      Designing the Future<br />
      Where Creativity and Code Converge.
    </h2>
  </div>
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
</template>

<script>
  export default {
    name: "LandingVue",
  };
</script>

<style scoped>
  svg {
    position: relative;
    bottom: 100px;
    width: 40px;
    z-index: 1;
    opacity: 0.3;
    animation: arrow 2s ease-in-out infinite alternate;
  }

  @keyframes arrow {
    0% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(50%);
    }
  }
  
  h1 {
    flex-shrink: 0;
    width: auto; /* 461px */
    height: auto; /* 60px */
    white-space: pre-wrap;
    word-wrap: break-word;
    word-break: break-word;
    max-width: 100%;
    z-index: 1;
    position: relative;
    font-weight: 700;
    font-style: normal;
    font-family: "Inter" sans-serif;
    color: #ffffff;
    font-size: calc(50px + 1.5vw);
    
    letter-spacing: 1px;
    line-height: 1.2;
    text-align: center;
    animation: text 0.4s 0.4s ease-in forwards;
    opacity: 0;
  }
  @keyframes text {
    from {
    transform: perspective(100vw) rotateX(-50deg) translateY(50%);    }
    to {
    opacity: 1;
    }
  }
  h2 {
    flex-shrink: 0;
    width: 500px;
    height: auto; /* 72px */
    white-space: pre-wrap;
    word-wrap: break-word;
    word-break: break-word;
    max-width: 100%;
    overflow: visible;
    z-index: 1;
    position: relative;
    font-weight: 500;
    font-style: normal;
    font-family: "Inter", sans-serif;
    color: rgba(255, 255, 255);
    font-size: 24px;
    letter-spacing: -0.5px;
    margin-top: 90px;
    line-height: 1.5;
    opacity: 0;
    text-align: center;
    animation: text 0.4s 1s ease-in forwards;
  }
  .bg {
    box-sizing: border-box;
    flex-shrink: 0;
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 60px 60px 60px 60px;
    overflow: hidden;
    position: relative;
    align-content: center;
  overflow: hidden;
     -webkit-mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 1));
  mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 1));

    flex-wrap: nowrap;
    gap: 20;
    background-image: url("@/assets/mac.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    border-radius: 0px 0px 0px 0px;
  }
  .bg::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: inherit;
    opacity: 1;
    animation: appear 1s ease-in forwards;
  }
  @keyframes appear {
    to {
    opacity: 0.6;
    }
  }
</style>
