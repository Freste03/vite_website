<script>
import MovieList from '../components/MovieList.vue';
  export default {
    components: {
      MovieList
    },
    data() {
      return {
        enteredSearch: '',
        searchResults: []
      }
    },
    methods: {
      async searchMovies() {
        try {
          this.movies = [];
          const response = await fetch(`https://api.watchmode.com/v1/search/?apiKey=fZVOkS2amEB9WT4aLVZ6h6Dwk7VTfS9FT7swZbFV&search_field=name&types=movie&search_value=${this.enteredSearch}`);
          const data = await response.json();
          this.numberOfMovies = data.total_results;
          
          for (const movieResult of data.title_results) {
            const movieId = movieResult.id;
            const movieResponse = await fetch(`https://api.watchmode.com/v1/title/${movieId}/details/?apiKey=fZVOkS2amEB9WT4aLVZ6h6Dwk7VTfS9FT7swZbFV`);
            const movieData = await movieResponse.json();
            this.movies.push(movieData);
          }
          this.searchResults = this.movies.filter(movie => 
          movie.title.toLowerCase().includes(this.enteredSearch.toLowerCase()));
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      }
    }
  }
</script>
  
<template>
    <div class="main">
      <h1>Search movies</h1>
      <input type="text" v-model="enteredSearch" @keyup.enter="searchMovies" placeholder="Search movie...">
      <MovieList :movies="searchResults" />
    </div>
</template>

<style scoped>
    .main {
        height: 90vh;
        width: 100vw;
        background-color: black;
        display: block;
        text-align: center;
    }

    h1 {
        color: white;
        margin: 20px 0 20px 0;
    }

    input {
        width: 300px;
        height: 40px;
     }
</style>