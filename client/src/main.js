import { createApp, h } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import App from './App.vue'
import NowPlayingPage from './components/NowPlayingPage.vue'
import RequestPage from './components/RequestPage.vue'

// Define some routes
const routes = [
  { path: '/', component: NowPlayingPage },
  { path: '/request', component: RequestPage },
]

// Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = createRouter({
  // Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHashHistory(),
  routes, // short for `routes: routes`
})

const app  = createApp({
  render: ()=>h(App)
});
  
// Make sure to _use_ the router instance to make the
// whole app router-aware.
app.use(router)

app.mount('#app')

// Now the app has started!