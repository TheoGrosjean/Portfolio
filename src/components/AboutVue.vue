<template>
  <div id="about" class="about">
    <div class="profil">
      <img id="imageProfil" src="@/assets/theo.jpg" alt="me" />
      <div id="aboutText" class="text">
        <h1>About</h1>
        <p>
          My name is Théo and I am passionate about web development. Currently
          in my fourth year at Epitech, I have gained solid experience in web
          development through my academic journey and my work experience in
          alternance. I am always looking for new challenges to improve my
          technical skills and develop my creativity. I have a curious and
          persevering mind, and I am constantly searching for innovative
          solutions and new techniques.
        </p>
      </div>
    </div>
    <div class="experiences">
      <h1>Experiences</h1>
      <div class="xp">
        <ul>
          <li>
            <h3>Full stack Developer | ALIAE - NANCY</h3>
            <h4>Alternance de 2 ans | 2022 - 2024</h4>
            <p>
              Création de plateformes web complètes : visualisation de
              conversation, gestion des données. Création de mockups.
              Présentation lors de meetings.
            </p>
            <h4>Stage de 4 mois | 2022</h4>
            <p>
              Refonte visuel d'un 'ChatBot', optimisation des requettes et
              deploiement
            </p>
          </li>
             <li>
            <h3>Developer | LA BANQUE POSTALE - NANCY</h3>
            <h4>Stage en alternance de 6 mois | 2021</h4>
            <p>
                Automatisation de la création des 'Baseline compliance'
            </p>
            <h4>Stage de 4 mois | 2020</h4>
            <p>
             Mise à jour et création des outils internes au secteur DSIBR
            </p>
          </li>
        </ul>
      </div>
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
  li {
    list-style: none;
    font-weight: lighter;
    width: 90%;
    padding: 10px;
    text-align: left;
  }
  p {
    font-weight: lighter;
    font-size: 1.5em;
    width: 90%;
    padding: 10px;
    text-align: left;
  }
  .about {
    display: flex;
    flex-direction: column;
    background-color: rgb(26, 26, 26);
  }
  .profil {
    width: 100vw;
    flex-wrap: wrap;
    display: flex;
    color: white;
    align-items: center;
    justify-content: center;
    padding-top: 100px;
    padding-bottom: 100px;
  }
  .experiences {
    width: 100vw;
    display: flex;
    color: white;
    text-align: start;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: flex-start;
  }
  .experiences p {
    width: 100%;
    margin: 0;
    font-size: 1.5em;
    margin-bottom: 20px;
  }
  .experiences h4 {
    margin : 0;
    font-size: 1.8em;
  }
  .experiences h3 {
    font-size: 2em;
    margin-bottom: 25px;
    text-decoration: underline;
  }
  .xp {
    width: 100%;
  }
  ul {
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
</style>
