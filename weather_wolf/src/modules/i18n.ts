import { createI18n } from 'vue-i18n'
import { UserModule } from '~/types/UserModule'

// import i18n resources
// https://vitejs.dev/guide/features.html#glob-import
const messages = Object.fromEntries(
  Object.entries(import.meta.globEager('../../locales/*.json')).map(
    ([key, value]) => {
      return [key.slice(14, -5), value.default]
    },
  ),
)

export const i18nInstance = createI18n({
  legacy: false,
  locale: 'en',
  messages,
})

export const i18n = i18nInstance.global

export const install: UserModule = ({ app }) => {
  app.use(i18nInstance)
}
