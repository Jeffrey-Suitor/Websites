import { createPinia } from 'pinia'
import type { UserModule } from '~/types/UserModule'

// Setup Pinia
// https://pinia.esm.dev/
export const install: UserModule = ({ app }) => {
  const pinia = createPinia()
  app.use(pinia)
}
