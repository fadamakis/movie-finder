<template>
  <div class="h-screen flex justify-center items-center text-center">
    <div class="container mx-auto">
      <h1 class="p-3 text-blue-600 text-4xl lg:text-6xl">Movie Finder</h1>
      <div class="relative max-w-3xl mx-auto px-6">
        <div class="absolute h-10 mt-1 left-0 top-0 flex items-center pl-10">
          <svg
            class="h-4 w-4 fill-current text-gray-600"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path
              d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"
            ></path>
          </svg>
        </div>
        <input
          v-model="searchTerm"
          type="search"
          placeholder="Search for a movie..."
          class="block w-full bg-gray-100 focus:outline-none focus:bg-white focus:shadow text-gray-700 font-bold rounded-lg pl-12 pr-4 py-3"
          @keyup.enter="search"
        />
      </div>
      <div class="text-center mt-8">
        <nuxt-link
          to="/results/?searchTerm=lord%20of%20the%20rings"
          class="text-blue-600 bg-white hover:bg-blue-100 font-bold py-2 px-4 rounded shadow"
        >
          I'm feeling lucky
        </nuxt-link>
        <button
          class="bg-blue-700 text-white hover:bg-blue-500 font-bold py-2 px-4 rounded ml-4 shadow"
          :class="{ 'opacity-75 cursor-not-allowed': !searchTerm }"
          :disabled="!searchTerm"
          @click="search"
        >
          Search
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchTerm: '',
    }
  },
  methods: {
    search() {
      if (this.searchTerm) {
        this.$router.push({
          path: '/results/',
          query: { searchTerm: this.searchTerm },
        })
      }
    },
  },
}
</script>
