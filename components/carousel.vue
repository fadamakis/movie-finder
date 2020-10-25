<template>
  <VueSlickCarousel :arrows="true" :dots="true">
    <div v-for="movie in items" :key="movie.imdbID">
      <movieCard :movie="movie" />
    </div>
  </VueSlickCarousel>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

import movieCard from './movieCard.vue'

export default {
  components: { VueSlickCarousel, movieCard },
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
}
</script>

<style>
.slide {
  height: 320px;
  align-items: center;
  display: flex;
  justify-content: center;
  background: #23b7d9;
  font-size: 42px;
  color: white;
  background-size: cover;
}

.slide .title {
  background: rgb(35 182 217 / 0.9);
  padding: 0px 12px;
}

button.slick-prev:before,
button.slick-next:before {
  color: #667;
}
</style>
