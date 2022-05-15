import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import Vue3Storage, {StorageType} from "vue3-storage"
import VueSidebarMenu from 'vue-sidebar-menu'
import 'vue-sidebar-menu/dist/vue-sidebar-menu.css'

const app = createApp(App)

app.use(router)

app.use(Vue3Storage, {namespace: "pro_", storage: StorageType.Local})

app.use(VueSidebarMenu)

app.mount('#app')

