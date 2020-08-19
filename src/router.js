import Vue from 'vue'
import Router from 'vue-router'

const Home = () => import('./components/Home')
const Search = () => import('./components/Search')


Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/search',
            name: 'Search',
            component: Search
        }
    ]
})