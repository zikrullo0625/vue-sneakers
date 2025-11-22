import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import '@fortawesome/fontawesome-free/css/all.min.css';
import './icons.js'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import router from './router'

createApp(App)
    .use(router)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app')
