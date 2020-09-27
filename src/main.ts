import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
// import request from './utils/request'
import './styles/index.scss'

import 'normalize.css/normalize.css'

const app = createApp(App)

setTimeout(() => {
  app
    .use(store)
    .use(router)
    .mount('#app')
}, 2000)
