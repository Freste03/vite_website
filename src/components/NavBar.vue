<script setup>
    import {RouterLink, RouterView} from 'vue-router'
</script>

<template>
  <header>
    <nav>
        <RouterLink class="home_link" to="/">Best Movies</RouterLink>
        <RouterLink class="search_link" to="/searchmovies">Search Movies</RouterLink>
    </nav>
  </header>
  <RouterView />
</template>

<style scoped>
    header {
        background-color: rgb(220, 198, 0);
        height: 7vh;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100vw;
    }
   
   .home_link {
    font-weight: bold;
    font-size: 24px;
    font-family: sans-serif;
    color: black;
    text-decoration: none;
    margin-right: 70vw;
   }

   .search_link {
    font-weight: bold;
    font-size: 24px;
    font-family: sans-serif;
    color: black;
    text-decoration: none;
   }

   .favorite_link {
    font-weight: bold;
    font-size: 24px;
    font-family: sans-serif;
    color: black;
    text-decoration: none;
    margin-left: 1rem;
   }

   @media screen and (max-width: 500px) {

    .home_link, .search_link {
        font-size: 1rem;
    }
    .home_link {
        margin-right: 45vw;
    }
   }

   @media screen and (min-width: 501px) and (max-width: 1030px) {

    .home_link, .search_link {
    font-size: 1.3rem;
    }
    .home_link {
    margin-right: 45vw;
    }
}
</style>