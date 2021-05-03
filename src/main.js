import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/tailwind.css'
import MenuList from './components/MenuList'
const app = createApp(App)
app.use(router)
app.mount('#app')
app.component('menu-list',MenuList)
