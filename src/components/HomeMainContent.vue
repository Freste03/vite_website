<script>
    export default {
        created() {
            this.fetchMovies()
        },
        data() {
            return {movies: null, url: 'https://imdb-top-100-movies.p.rapidapi.com/', options: {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'b92e882e0cmshdb256f87f2aa9bdp18e09fjsn5ce9555209c1',
		'X-RapidAPI-Host': 'imdb-top-100-movies.p.rapidapi.com'
	}
}}
        },
        methods: {
            fetchMovies() {
                fetch(this.url, this.options)
                    .then(res => res.json())
                    .then((data) => {
                        this.movies = data
                    })
            }
        }
    }
</script>

<template>
    <div class="main">
        <div class="movies" v-for="movie in movies">
            <div class="content">
                <img :src="movie.image" alt="">
                <h2>{{ movie.rank }}.</h2>
                <h3>{{ movie.rating }}</h3>
                <h1><a :href="movie['imdb_link']"> {{ movie.title}}</a></h1>
                <p>{{ movie.description }}</p>
            </div>
        </div>
    </div>
</template>

<style>
    .main {
        height: auto;
        background: black;
    }

    .movies {
        display: inline-block;  
        align-items: center;
    }

    .content {
        width: 400px;
        min-height: 500px;
        text-align: center;
        margin-top: 25px;
    }

    h1 {
        color: white;
        font-size: 24px;
    }

    h2 {
        color: white
    }

    h3 {
        color: rgb(220, 198, 0);
        font-family: sans-serif;
    }

    a {
        color: white;
        text-decoration: none;
    }

    p {
        color: white;
    }

    img {
        height: 281px;
        width: 190px;
        border: white solid 1px;
    }
</style>