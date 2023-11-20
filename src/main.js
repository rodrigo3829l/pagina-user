import { createApp } from 'vue'
import App from './App.vue'

import './css/styles.css'
import 'font-awesome/css/font-awesome.css';
import router from './router/router.js'

createApp(App)
    .use( router )
    .mount('#app')

