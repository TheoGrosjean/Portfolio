<template>
  <div class="container">
    <div class="card">
      <p>Stage / Part-time</p>
      <h1>DSIBR</h1>
      <div class="list">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="black"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <p>Automatisation des "Baseline compliance"</p>
      </div>
      <div class="list">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="black"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <p>Mise à jour et création d'outils internes</p>
      </div>
      <div class="list">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="black"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <p>Participation à des réunion <br/> présentations des réalisations</p>
      </div>
    </div>
    <div class="card">
      <p>Stage / Alternance</p>
      <h1>Aliae</h1>
      <div class="list">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="black"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <p>Refonte visuelle d'un chatbot</p>
      </div>
      <div class="list">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="black"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <p>Mise en place d'un système de socket sur le chatBot</p>
      </div>
      <div class="list">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="black"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <p>Création d'un plateforme web pour faciliter <br/> la visualisation et l'amelioration des datasets</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "exVue",
};
</script>

<style scoped>
svg {
  height: 25px;
}
.list {
  display: flex;
  align-items: center;
  gap: 20px;
  width: 100%;
  height: fit-content;
}
.container {
  height: 100vh;
  gap: 100px;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
}
.card {
  box-sizing: border-box;
  flex-shrink: 0;
  width: fit-content;
  height: max-content; 
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 30px 30px 30px 30px;
  background-color: #ffffff;
  overflow: hidden;
  position: relative;
  align-content: flex-start;
  flex-wrap: nowrap;
  gap: 20;
  border-radius: 20px;
}
h1 {
  flex-shrink: 0;
  width: auto; /* 247px */
  height: 48px;
  white-space: pre;
  position: relative;
  font-weight: 700;
  font-style: normal;
  font-family: "Inter", "Inter Placeholder", sans-serif;
  color: var(--token-fb63d21e-2930-4a00-8ef1-606d72b7b50f, #333333);
  font-size: 54px;
  letter-spacing: -3px;
  line-height: 1;
  text-align: left;
}
p {
  flex-shrink: 0;
  width: auto; /* 40px */
  height: auto; /* 21px */
  white-space: pre;
  position: relative;
  font-weight: 600;
  font-style: normal;
  font-family: "Inter", sans-serif;
  color: #666666;
  font-size: 14px;
  letter-spacing: 0em;
  line-height: 1.5;
  text-align: left;
}
</style>
