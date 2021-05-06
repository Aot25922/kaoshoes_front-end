import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/tailwind.css'
import ProductList from './components/ProductList'
import ErrorPage from './components/Error.vue'
const app = createApp(App)
app.use(router)
app.mount('#app')
app.component('product-list',ProductList)
app.component('error-detail',ErrorPage)
