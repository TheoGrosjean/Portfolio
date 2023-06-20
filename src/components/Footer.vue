<template>
  <div class="footer">
    <p>Site crée par mes soins en vuejs</p>
    <img @click="goToLk()" class="lk" src="@/assets/linkedin_logo.webp"/>
    <svg @click="getCV()" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m.75 12l3 3m0 0l3-3m-3 3v-6m-1.5-9H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
</svg>
<p>CV</p>
  </div>
</template>

<script>
export default {
    name:"footerVue",
    methods : {
    goToLk(){
      window.open('https://www.linkedin.com/in/th%C3%A9o-grosjean-00788019a/', "_blank")
    },
    getCV() {
        window.open(process.env.BASE_URL + 'cv.pdf', '_blank')
    }
  },
}
</script>

<style scoped>
svg {
    width: 25px;
  height: 25px;
  cursor: pointer;
  transition: all 0.3s;
  margin-right: -18px;
}
svg:hover {
    transform: scale(1.07);
}
.footer {
    color: rgb(83, 83, 83);
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100px;
    gap: 20px;
}  
.lk {
  width: 25px;
  height: 25px;
  filter: grayscale(1);
  cursor: pointer;
  transition: all 0.3s;
}
.lk:hover {
  transform: scale(1.07);
}
</style>