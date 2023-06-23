
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import '@/assets/style/main.scss'

import VueLazyLoad from 'vue-lazyload'
import errorImage from '@/assets/images/error.png'


const app = createApp(App)

app.use(VueLazyLoad, {
    error: errorImage
})

app.use(createPinia())
app.use(router)

app.mount('#app')
