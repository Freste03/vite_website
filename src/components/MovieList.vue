<template>
  <div class="main">
    <div class="movie" v-for="movie in movies" :key="movie.id" v-if="movies.length !== 0">
        <img :src="movie.poster" alt="">
        <h1>{{ movie.title }}</h1>
        <h3>{{ movie.year }}</h3>
        <h4>{{ movie.user_rating }}</h4>
        <p>{{ movie.plot_overview }}</p>
      </div>
      <div v-else>
        <p class="no-movies">No movies found</p>
      </div>
  </div>
</template>
  
  <script>
  export default {
    props: {
      movies: {
        type: Array,
        default: () => []
      }
    }
  };
  </script>

<style scoped>

    .main {
      width: 100%;
    }
    .movie {
        width: 400px;
        text-align: center;
        display: block;
        margin: 0 auto;
    }

    h1, h3 {
        color: white;
    }

    h4 {
        color: rgb(220, 198, 0);
        font-size: 1.5rem;
    }

    p {
        color: white;
    }

    img {
        height: 281px;
        width: 190px;
        border: white solid 1px;
        border-radius: 5px;
        margin-top: 40px;
    }

    .no-movies {
        margin: 10px 0 0 25px;
        font-size: 1.2rem;
    }

    @media screen and (max-width: 375px) {
        .movie {
            width: 300px;
        }
    }
</style>
  