import { Ref } from 'vue'
import { useStorage } from '@vueuse/core'
import type { Location } from '~/types/Location'

const torontoCoords: Location = {
  latitude: 43.6532,
  longitude: -79.3832,
  street: 'Toronto, Ontario, CA',
}

export const colorSchema = useStorage('color-schema', 'auto') as unknown as Ref<
'auto' | 'dark' | 'light'
>

export const userLocation = useStorage(
  'user-location',
  torontoCoords,
) as unknown as Ref<Location>

export const userLanguage = useStorage('user-language', 'en') as unknown as Ref<
'en' | 'fr'
>
