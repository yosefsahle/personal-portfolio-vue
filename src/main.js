import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './style.css' 
import './assets/styles/animations.css'
import './assets/styles/floating.css'

createApp(App)
  .use(router)
  .mount('#app')