<template>
  <section class="container mx-auto">
    <BackButton />
    <div class="w-1/2 mx-auto mt-20">
      <CarouselSlider v-if="results.Search" :items="results.Search" />
      <div v-if="results.Response === 'False'" class="text-center">
        No results found. Please
        <nuxt-link to="/">try searching something else</nuxt-link>
      </div>
    </div>
  </section>
</template>

<script>
import CarouselSlider from '../components/carousel.vue'
import BackButton from '../components/backButton.vue'

export default {
  components: { CarouselSlider, BackButton },
  data() {
    return {
      results: {},
    }
  },
  async mounted() {
    this.results = await fetch(
      `//www.omdbapi.com/?apikey=${process.env.omdbApiKey}&s=${this.$route.query.searchTerm}&type=movie`
    ).then((res) => res.json())
  },
}
</script>
