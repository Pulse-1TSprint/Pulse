import { createApp } from 'vue'
import App from './App.vue'
import VueConfetti from 'vue-confetti'
import router from './router'
import store from './store'
import './assets/styles/style.css';

createApp(App).use(router)
.use(store).use(VueConfetti).mount('#app')
