import { createApp, provide } from 'vue'
import { createRouter, createWebHistory} from 'vue-router'
import App from './App.vue'
import Home from './pages/home.vue'
import Ailment from './pages/ailment.vue'
import Info from './pages/info.vue'
import Others from './pages/others.vue'
import { PartInfoPlugin } from './plugins/partInfoPlugin.js'

const routes = [
    { path:"/home", component: Home},
    { path:"/ailment", component: Ailment},
    { path:"/info", component: Info},
    { path:"/others", component: Others}
]

const createPart = (code, desc) => {
    return {
        code,
        description: desc
    }
}

const router = createRouter({
    routes,
    history: createWebHistory()
})



const app = createApp(App);
//Pluggins
app.use(PartInfoPlugin, {
    'jmx123': createPart('jmx123', 'floor mat'),
    'jmx124': createPart('jmx123', 'head light'),
    'jmx125': createPart('jmx123', 'oil filter'),
    'jmx126': createPart('jmx123', 'oil pan'),
    'jmx127': createPart('jmx123', 'dome light bulb'),
    'jmx128': createPart('jmx123', 'seat pocket'),
    'jmx129': createPart('jmx123', 'odometer'),

})


app.use(router)
app.provide("$partDescription", app.config.globalProperties.$partDescription);

app.mount('#app')
