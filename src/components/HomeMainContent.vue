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
                <a :href="movie['imdb_link']" target="_blank"><img :src="movie.image" alt=""></a>
                <h2>{{ movie.rank }}.</h2>
                <h3>{{ movie.rating }}</h3>
                <h1><a :href="movie['imdb_link']"> {{ movie.title}}</a></h1>
                <p>{{ movie.description }}</p>
        </div>
    </div>
</template>

<style scoped>
    .main {
        height: auto;
        background: black;
        width: 100%;
        display: grid;
        justify-items: center;
        grid-template-columns: repeat(3, 500px);
        grid-template-rows: repeat(auto-fill, minmax(500px, auto));
    }

    .movies {
        height: 500px;
        width: 500px;
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
        margin: 0 30px 0 30px;
    }

    img {
        height: 281px;
        width: 190px;
        border: white solid 1px;
        border-radius: 5px;
    }

    @media screen and (max-width: 975px) {
        .main {
            grid-template-columns: repeat(1, 1fr);

        }

        .movies {
            width: 350px;
        }
    }

    @media screen and (min-width: 1920px) {
        .main {
            grid-template-columns: repeat(4, 475px);
        }
    }
</style>