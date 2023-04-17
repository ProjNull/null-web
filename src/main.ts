import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'


// styles
import "@/css/main.css"
import "@/css/sections.css"
import "@/css/team-grid.css"
import "@/css/settings.css"



// vue main app
import App from './App.vue'

// home page (Imported using import so its not separate file after build)
import Home from "@p/home.vue"




const routes = [
    { path: '/', component: Home },
    { path: '/about', component: () => import("@p/about.vue") },
    { path: '/projects', component: () => import("@p/projects.vue") },
  ]
  
  // 3. Create the router instance and pass the `routes` option
  // You can pass in additional options here, but let's
  // keep it simple for now.
  const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHistory(),
    routes, // short for `routes: routes`
  })
  
  // 5. Create and mount the root instance.
  const app = createApp(App)
  // Make sure to _use_ the router instance to make the
  // whole app router-aware.
  app.use(router)
  
  app.mount('#app')
