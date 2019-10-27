import VueRouter from 'vue-router'
import Home from './components/Home'

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    }
];

export default new VueRouter({routes});