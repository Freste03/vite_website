<script>
    export default {
        data() {
            return {
                enteredSearch: null, movieId: null, movie: null
            }
        },
        methods: {
            fetchId() {
                fetch(`https://api.watchmode.com/v1/search/?apiKey=fZVOkS2amEB9WT4aLVZ6h6Dwk7VTfS9FT7swZbFV&search_field=name&types=movie&search_value=${this.enteredSearch}`)
                    .then(res => res.json())
                    .then((data) => {
                        let i = 1
                        for (i; i < data.title_results.length; i++) {
                            this.movieId = data.title_results[i].id
                            fetch(`https://api.watchmode.com/v1/title/${this.movieId}/details/?apiKey=fZVOkS2amEB9WT4aLVZ6h6Dwk7VTfS9FT7swZbFV `)
                                .then(response => response.json())
                                .then((result) => {
                                 this.movie = result
                                console.log(this.movie)
                })
        
                        }
                    })
            }
            
        }
    }

</script>

<template>
    <div class="main">
        <input type="text" v-model="enteredSearch">
        <input type="button" value="Submit" @click="fetchId()">
        <div class="movie" v-for="item in movie">
            
            <img :src="item['title']" alt="">
        </div>
    </div>
</template>

<style>
    .main {
        height: 100vh;
        background-color: black;
    }

    p {
        color: white;
    }

    h1 {
        color: white;
    }
</style>