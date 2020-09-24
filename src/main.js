import Vue from 'vue'
import App from './App.vue'
import router from './router'
import '@/assets/css/style.css'
import 'hamburgers/dist/hamburgers.css'
import 'boxicons'
import Vuesax from 'vuesax'

import 'vuesax/dist/vuesax.css'
Vue.use(Vuesax, {

})
Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')