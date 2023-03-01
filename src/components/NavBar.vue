<template>
  <div class="navbar">
    <ul>
      <li @click="scroll('home')">Home</li>
      <li @click="scroll('about')">About</li>
      <!-- <li>Projects</li> -->
      <li>Contact</li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "NavBar",
    methods: {
      scroll(id) {
        var loc = document.getElementById(id);
        loc.scrollIntoView({ behavior: "smooth" });
      },
    },
  };
</script>

<style scoped>
  ul {
    list-style: none;
    display: flex;
    padding: 0;
    margin: 0;
    width: 100%;
    justify-content: space-around;
  }

  li {
    cursor: pointer;
    transition: all 0.2s ease-in-out;
  }

  li:hover {
    transform: scale(1.1);
  }
  .navbar {
    height: 50px;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.795);
    position: fixed;
    justify-content: center;
    align-items: center;
    display: flex;
    z-index: 2;
    /* animation: nav 2s ease-in-out forwards; */
    /* animation-delay: 1s; */
    /* transform: translateY(-100%); */
  }
  @keyframes nav {
    0% {
      opacity: 0;
      transform: translateY(-100%);
    }
    50% {
      opacity: 0;
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
</style>
