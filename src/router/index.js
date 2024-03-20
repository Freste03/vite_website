import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SearchMoviesView from '../views/SearchMoviesView.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/searchmovies',
            name: 'searchmovies',
            component: SearchMoviesView
        }
    ]
})

export default router