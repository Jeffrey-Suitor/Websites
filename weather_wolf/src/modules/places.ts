import VueGoogleMaps from '@fawmi/vue-google-maps'
import { UserModule } from '~/types/UserModule'

export const install: UserModule = ({ app }) => {
  app.use(VueGoogleMaps, {
    load: {
      key: import.meta.env.VITE_GOOGLE_API_KEY,
      libraries: 'places',
    },
  })
}
