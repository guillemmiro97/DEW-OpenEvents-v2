import {createApp} from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.config.globalProperties.token = "0000lhjlj00000"


app.use(router).mount('#app')

