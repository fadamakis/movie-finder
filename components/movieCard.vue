<template>
  <div class="max-w-sm w-full lg:max-w-full lg:flex">
    <div
      v-if="movie.Poster !== 'N/A'"
      class="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
      :style="moviePoster"
      :title="movie.Title"
    ></div>
    <div
      class="bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal"
    >
      <div class="mb-8">
        <div class="text-gray-900 font-bold text-xl mb-2">
          {{ movie.Title }}
        </div>
      </div>
      <div class="flex items-center">
        <div class="text-sm">
          <p class="text-gray-900 leading-none">Directed</p>
          <p class="text-gray-600">{{ movie.Year }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    movie: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      moviePoster: {
        backgroundImage: `url(${this.movie.Poster})`,
      },
    }
  },
}
</script>
