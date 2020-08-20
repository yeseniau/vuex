import Vue from 'vue'
import Router from 'vue-router'

const Home = () => import('./components/Home')
const Search = () => import('./components/Search')
const Sales = () => import('./components/Sales')
const Total = () => import('./components/Total')
const NotFound = () => import('./components/NotFound')


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
            name: 'search',
            component: Search
        },
        {
            path: '/sales',
            name: 'sales',
            component: Sales
        },
        {
            path: '/total',
            name: 'total',
            component: Total
        },
        {
            path: '/*',
            name: 'notfound',
            component: NotFound
        },
    ]
})