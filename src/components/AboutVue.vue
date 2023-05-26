<template>
  <div class="container">
    <div class="text_container">
      <h1 id="title">About me</h1>
      <h2>Hi ! I'm Théo Grosjean</h2>
      <p>I'm a French IT student in fourth year at Epitech Nancy, I'm passionate about web development </p>
    </div>
    <!-- <img src="@/assets/IMG_4457.jpg" /> -->
    <Avatar/>
  </div>
</template>

<script>
  import Avatar from "./AvatarVue.vue";

  export default {
  components: {
    Avatar,
  },
    data() {
      return {
      };
    },
    mounted() {
      let observer = new IntersectionObserver((entries) =>
          {
              entries.forEach((entry) =>
              {
                  console.log(entry.isIntersecting);
              })
          },
      )
      let target = document.querySelector("#title");
      observer.observe(target);
    }
  };
</script>

<style scoped>
  .container {
    display: flex;
    flex-wrap: nowrap;
    width: 100vw;
    justify-content: space-between;
    background-clip: content-box;
    /* -webkit-mask-image: linear-gradient(to top, black 1%, transparent 90%); */
    mask-image: linear-gradient(to top, transparent, black, transparent);
    height: 100vh;
  }
  img {
    width: auto;
    background-clip: content-box;
    /* -webkit-mask-image: linear-gradient(to top, black 1%, transparent 90%); */
    -webkit-mask-image: linear-gradient(to right, transparent, black);
    mask-image: linear-gradient(to right, transparent, black);
    height: 100%;
  }
  .text_container {
    display: flex;
    /* background: linear-gradient(90deg, #484747 10%, #010101 50%); */
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: auto;
    padding-left: 25px;
    height: 100%;
  }
  .text_container h1 {
    font-family: "Inter", "Inter Placeholder", sans-serif;
    letter-spacing: -2;
    line-height: 1.2;
    text-align: left;
    color: white;
    mix-blend-mode: difference;
    font-size: 180px;
    font-weight: 700;
    font-style: normal;
    opacity: 0;
    transition: opacity 0.5s;
    z-index: 1;
  }
  .text_container h1.animate {
    opacity: 1;
  }
  .text_container p {
    mix-blend-mode: hard-light;
    font-family: "Source Sans Pro", Helvetica, Arial, sans-serif;
    font-size: 24px;
    color: #b8b8b8;
    font-weight: 500;
    z-index: 1;
    width: 50%;
  }
  button {
    box-sizing: border-box;
    flex-shrink: 0;
    z-index: 20;
    width: min-content; /* 88px */
    height: 40px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 15px 15px 15px 15px;
    background-color: #00b3ff;
    overflow: visible;
    position: relative;
    align-content: center;
    flex-wrap: nowrap;
    gap: 10;
    border-radius: 8px;
  }
</style>
