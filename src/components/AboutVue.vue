<template>
  <div class="container">
    <img src="@/assets/theo.jpg" alt="me" />
    <div class="text">
      <h1>About</h1>
      <p>
        My name is Théo and I am passionate about web development. Currently in
        my fourth year at Epitech, I have gained solid experience in web
        development through my academic journey and my work experience in
        alternance. I am always looking for new challenges to improve my
        technical skills and develop my creativity. I have a curious and
        persevering mind, and I am constantly searching for innovative solutions
        and new techniques.
      </p>
    </div>
  </div>
</template>

<script>
  export default {};
</script>

<style scoped>
  .text {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 900px;
  }
  img {
    height: 50vw;
    max-height: 700px;
    animation: profilImg 1s linear forwards;
    background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 1) 50%,
      rgba(255, 255, 255, 0) 100%
    );
  }
  @keyframes profilImg {
    0% {
      box-shadow: 0px 0px rgba(255, 255, 255, 0.507);
      filter: blur(5px) grayscale(1);
    }
    100% {
      box-shadow: -50px -40px 80px rgba(255, 255, 255, 0.507);
      filter: blur(0px) grayscale(1);
    }
  }
  p {
    font-weight: lighter;
    font-size: 1.5em;
    width: 50%;
  }
  .container {
    width: 100vw;
    flex-wrap: wrap;
    display: flex;
    color: white;
    align-items: center;
    justify-content: center;
    background-color: rgb(26, 26, 26);
    padding-top: 100px;
    padding-bottom: 100px;
  }
</style>
