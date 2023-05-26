<template>
  <div class="container">
    <img src="@/assets/brain.jpg" />
    <div class="bandeau">
      <div class="contenu-bandeau">
        <p class="card">Vuejs</p>
        <p class="card">docker</p>
        <p class="card">Html</p>
        <p class="card">css</p>
        <p class="card">js</p>
        <p class="card">python</p>
        <p class="card">nodejs</p>
        <p class="card">Sql</p>
        <p class="card">Threejs</p>
        <p class="card">Vuetify</p>
        <p class="card">Vuejs</p>
        <p class="card">docker</p>
        <p class="card">Html</p>
        <p class="card">css</p>
        <p class="card">js</p>
        <p class="card">python</p>
        <p class="card">nodejs</p>
        <p class="card">Sql</p>
        <p class="card">Threejs</p>
        <p class="card">Vuetify</p>
        <p class="card">Vuejs</p>
        <p class="card">docker</p>
        <p class="card">Html</p>
        <p class="card">css</p>
        <p class="card">js</p>
        <p class="card">python</p>
        <p class="card">nodejs</p>
        <p class="card">Sql</p>
        <p class="card">Threejs</p>
        <p class="card">Vuetify</p>
      </div>
    </div>
    <h1>Competences</h1>
    <div class="bandeau">
      <div class="contenu-bandeau-bas">
        <p class="card">Django</p>
        <p class="card">NuxtJS</p>
        <p class="card">Github</p>
        <p class="card">MongoDB</p>
        <p class="card">CHartJS</p>
        <p class="card">TailwindCSS</p>
        <p class="card">SocketIO</p>
        <p class="card">Gitlab</p>
        <p class="card">React</p>
        <p class="card">FastAPI</p>
        <p class="card">Django</p>
        <p class="card">NuxtJS</p>
        <p class="card">Github</p>
        <p class="card">MongoDB</p>
        <p class="card">CHartJS</p>
        <p class="card">TailwindCSS</p>
        <p class="card">SocketIO</p>
        <p class="card">Gitlab</p>
        <p class="card">React</p>
        <p class="card">FastAPI</p>
        <p class="card">Django</p>
        <p class="card">NuxtJS</p>
        <p class="card">Github</p>
        <p class="card">MongoDB</p>
        <p class="card">CHartJS</p>
        <p class="card">TailwindCSS</p>
        <p class="card">SocketIO</p>
        <p class="card">Gitlab</p>
        <p class="card">React</p>
        <p class="card">FastAPI</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    components: {},
  };
</script>

<style scoped>
  .container {
    display: flex;
    flex-direction: column;
    position: relative;
    justify-content: center;
    align-items: center;
    height: 100vh;
    mask-image: linear-gradient(
      to top,
      rgba(0, 0, 0, 1),
      rgba(0, 0, 0, 1),
      rgba(0, 0, 0, 0)
    );
  }

  img {
    width: 100vw;
    object-fit: cover;
    position: absolute;
    height: 100vh;
    opacity: 0.5;
  }
  .bandeau {
    width: 100%;
    overflow: hidden;
  }
  .contenu-bandeau {
    animation: defilement 40s linear infinite alternate;
    white-space: nowrap;
  }
  .contenu-bandeau-bas {
    animation: defilement 40s linear infinite;
    animation-direction: reverse;
    white-space: nowrap;
  }
  h1 {
    font-family: "Source Sans Pro", Helvetica, Arial, sans-serif;
    text-transform: uppercase;
    font-size: 100px;
    font-weight: 900;
    text-shadow: 0px 10px 100px rgba(255, 255, 255, 0.507);
    z-index: 1;
  }
  .contenu-bandeau p,
  .contenu-bandeau-bas p {
    display: inline-block;
    z-index: 1;
    margin-right: 60px; /* Marge entre les éléments <p> */
    font-family: "Source Sans Pro", Helvetica, Arial, sans-serif;
    text-transform: uppercase;
    font-size: 28px;
    font-weight: 900;
  }
  .separator {
    height: 100%;
  }

  @keyframes defilement {
    0% {
      transform: translateX(0%);
    }

    100% {
      transform: translateX(-90%);
    }
  }
</style>
