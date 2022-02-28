// register vue composition api globally
import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import { createHead } from '@vueuse/head'
import { createI18n } from 'vue-i18n'
import routes from 'virtual:generated-pages'
import App from './App.vue'

import 'virtual:windi-base.css'
import 'virtual:windi-components.css'
// your custom styles here
import './styles/main.css'
// windicss utilities should be the last style import
import 'virtual:windi-utilities.css'
// windicss devtools support (dev only)
import 'virtual:windi-devtools'

const app = createApp(App)
const router = createRouter({
  history: createWebHistory(),
  routes,
})
const head = createHead()

const messages = Object.fromEntries(
  Object.entries(
    import.meta.globEager('../locales/*.y(a)?ml'))
    .map(([key, value]) => {
      const yaml = key.endsWith('.yaml')
      return [key.slice(11, yaml ? -5 : -4), value.default]
    }),
)

const i18n = createI18n({
  legacy: false,
  locale: 'en',
  messages,
})

app.use(i18n)
app.use(router)
app.use(head)
app.mount('#app')
