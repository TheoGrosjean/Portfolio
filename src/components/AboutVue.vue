<template>
  <div id="about" class="container">
    <div class="text_container">
      <h1 id="txt">À propos de moi</h1>
      <p id="txt">
        J'ai 25 ans et je suis étudiant à Epitech Nancy depuis 2019, je suis passionné par
        le développement web et la programmation en général.<br />
        Vous êtes sur mon portfolio, vous y trouverez mes projets, mes compétences et mes
        expériences. N'hesitez pas à me contacter si vous avez des questions ou des
        propositions de travail.
      </p>
    </div>
    <img id="img" src="@/assets/IMG_4457.jpg" />
    <!-- <Avatar /> -->
  </div>
</template>

<script>
export default {

  mounted() {
    let options = {
      root: null,
      rootMargin: "0px",
      treshold: 0.5,
    };
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.animate(
            [
              {
                transform: "perspective(100vw) rotateX(-90deg) translateY(50%)",
                opacity: 0,
              },
              { opacity: 1 },
            ],
            {
              duration: 700,
            }
          );
          observer.disconnect();
        }
      }
    }, options);
    const targets = document.querySelectorAll("#txt");
    targets.forEach(function (target) {
      observer.observe(target, options);
    });
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
  mask-image: linear-gradient(to bottom, transparent, black, transparent);
  height: 100vh;
  padding: 100px;
}
img {
  width: auto;
  /* -webkit-mask-image: linear-gradient(to top, black 1%, transparent 90%); */
  -webkit-mask-image: linear-gradient(to right, transparent, black);
  mask-image: linear-gradient(to top, transparent, black);
  height: 100%;
}
.text_container {
  display: flex;
  /* background: linear-gradient(90deg, #484747 10%, #010101 50%); */
  justify-content: center;
  text-align: start;
  flex-direction: column;
  height: 100%;
  width: 100vw;
  color: white;
}
.text_container h1 {
  font-family: "Inter", "Inter Placeholder", sans-serif;
  letter-spacing: -2;
  /* line-height: 1.2; */
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
.text_container p {
  mix-blend-mode: hard-light;
  font-family: "Source Sans Pro", Helvetica, Arial, sans-serif;
  font-size: 24px;
  color: #b8b8b8;
  font-weight: 500;
  width: 80%;
}
@media (max-width: 528px) {
  .container {
    flex-direction: column;
    align-items: center;
    padding: 10px;
    height: fit-content;
  }
  img {
    position: relative;
    overflow: hidden;
    width: 90%;
    height: auto;
    /* display: none; */
  }
  .container {
    mask-image: none;
  }
}
</style>
