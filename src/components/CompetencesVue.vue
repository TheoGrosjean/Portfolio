<template>
  <div id="competences" class="container">
    <h1>Competences</h1>
    <span><div class="card">
        <img src="@/assets/vue.png" />
        <h3>VueJs</h3>
      </div></span>
    <span
      ><div class="card">
        <img src="@/assets/css.png" />
        <h3>CSS</h3>
      </div></span>
    <span>
        <div class="card">
        <img src="@/assets/python.png" />
        <h3>Python</h3>
      </div>
    </span
    >
    <span
      ><div class="card">
        <img src="@/assets/js.png" />
        <h3>JavaScript</h3>
      </div></span
    >
    <span
      ><div class="card">
        <img src="@/assets/docker.png" />
        <h3>Docker</h3>
      </div></span
    >
    <span>
        <div class="card">
            <img src="@/assets/node.png" />
            <h3>NodeJS</h3>
      </div>
    </span>
    <span>
        <div class="card">
            <img src="@/assets/react.png" />
            <h3>React</h3>
      </div>
    </span>
    <span>
        <div class="card">
          <img src="@/assets/sql.png" />
          <h3>sql</h3>
        </div>
    </span>
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
      const comp = document.getElementById("competences");
      const position = comp.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      if (position < windowHeight && this.animate) {
        this.animate = false;
        comp.style.animation = "txtAbout 0.5s linear forwards";
      }
    },
  },
};
</script>

<style scoped>
span {
  overflow: hidden;
  border-radius: 25px;
}
img {
  filter: grayscale(1);
  width: 100px;
}
.container {
    background-color: rgb(0, 0, 0);
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
  align-items: center;
}
.card {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgb(0, 0, 0);
  border-radius: 25px;
  height: 250px;
  width: 250px;
  border: solid 1px rgb(255, 255, 255);
  transition: all 0.1s;
  animation: cards 1s linear;
}
.card.card:hover {
  transform: scale(1.1);
}
@keyframes cards {
  0% {
    filter: blur(10px);
    opacity: 0;
}
100% {
      filter: blur(0px);
    opacity: 1;
  }
}
</style>
