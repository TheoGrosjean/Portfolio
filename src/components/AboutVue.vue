<template>
  <div class="container">
    <div class="text_container">
      <h1 id="title">À propos de moi</h1>
      <p>
        J'ai 25 ans et je suis étudiant à Epitech Nancy depuis 2019, je suis passionné par le développement web et la programmation en général.<br/>
      Vous etes sur mon portfolio, vous y trouverez mes projets, mes compétences et mes expériences.
      N'hesitez pas à me contacter si vous avez des questions ou des propositions de travail.
      </p>
    </div>
     <img src="@/assets/IMG_4457.jpg" />
    <!-- <Avatar /> -->
  </div>
</template>

<script>

  export default {
    components: {
    },
    data() {
      return {};
    },
    mounted() {
      let observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          console.log(entry.isIntersecting);
        });
      });
      let target = document.querySelector("#title");
      observer.observe(target);
    },
  };
</script>

<style scoped>
  .container {
    display: flex;
    flex-direction: row;
    width: 100vw;
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
    align-items: flex-start;
    justify-content: center;
    text-align: start;
    flex-direction: column;
    width: auto;
    padding-left: 250px;
    height: 100%;
    width: 100vw;
  }
  .text_container h1 {
    font-family: "Inter", "Inter Placeholder", sans-serif;
    letter-spacing: -2;
    line-height: 1.2;
    text-align: left;
    padding-right: 10px;
    color: white;
    mix-blend-mode: difference;
    font-size: 80px;
    font-weight: 700;
    font-style: normal;
    opacity: 1;
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
