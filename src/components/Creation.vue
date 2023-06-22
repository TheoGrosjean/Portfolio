<template>
<div class="container">
  <Carousel :items-to-show="1.5" :autoplay="3000" :transition="1000" :wrap-around="true">
    <Slide :key="slide">
      <img src='@/assets/Sc/1.png'/>
    </Slide>
   <Slide  :key="slide">
      <img src='@/assets/Sc/2.png'/>
    </Slide>
       <Slide  :key="slide">
      <img src='@/assets/Sc/3.png'/>
    </Slide>
       <Slide  :key="slide">
      <img src='@/assets/Sc/4.png'/>
    </Slide>
       <Slide  :key="slide">
      <img src='@/assets/Sc/5.png'/>
    </Slide>
           <Slide  :key="slide">
      <img src='@/assets/Sc/6.png'/>
    </Slide>
           <Slide  :key="slide">
      <img src='@/assets/Sc/7.png'/>
    </Slide>
           <Slide  :key="slide">
      <img src='@/assets/Sc/8.png'/>
    </Slide>
    <template #addons>
      <Navigation />
      <Pagination />
    </template>
  </Carousel>
</div>
</template>

<script>
import { defineComponent } from 'vue'
import { Carousel, Navigation, Pagination, Slide } from 'vue3-carousel'

import 'vue3-carousel/dist/carousel.css'

export default defineComponent({
  name: 'vueCone',
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
  data() {
    return{
    }
  }
  // methods: {
  //   getImageUrl(image) {
  //     return require(`@/assets/${image}`)
  //   },
  // }
})
</script>

<style scoped>
img{
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.container {
  width: 100vw;
  margin-top: 200px;
}
.carousel__item {
  height: 200px;
  width: 500px;
  background-color: var(--vc-clr-primary);
  color: var(--vc-clr-white);
  font-size: 20px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.carousel__slide {
  padding: 10px;
  border-radius: 125px;
}

.carousel__prev,
.carousel__next {
  box-sizing: content-box;
  border: 5px solid white;
}
</style>
