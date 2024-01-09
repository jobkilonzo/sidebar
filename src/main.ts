import { createApp } from 'vue'

import App from './App.vue'
import Home from './views/Home.vue'
import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: Home
        },
        {
            path: '/about',
            component: import('./views/About.vue')
        }
    ]
})
const app = createApp(App)
app.use(router)
app.mount('#app')
