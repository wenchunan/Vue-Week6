import { createApp } from 'vue'

import 'bootstrap'

import axios from 'axios'
import VueAxios from 'vue-axios'

import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/vue-loading.css'

import {
  defineRule, Form, Field, ErrorMessage, configure
} from 'vee-validate'
import { localize, setLocale } from '@vee-validate/i18n'
import AllRules from '@vee-validate/rules'
import zhTW from '@vee-validate/i18n/dist/locale/zh_TW.json'

import App from './App.vue'
import router from './router'

Object.keys(AllRules).forEach((rule) => {
  defineRule(rule, AllRules[rule])
})

configure({
  generateMessage: localize({ zh_TW: zhTW })
})
setLocale('zh_TW')

const app = createApp(App)
app.use(router)
app.use(VueAxios, axios)
app.component('VueLoading', Loading)
app.component('VueForm', Form)
app.component('VueField', Field)
app.component('ErrorMessage', ErrorMessage)
app.mount('#app')
