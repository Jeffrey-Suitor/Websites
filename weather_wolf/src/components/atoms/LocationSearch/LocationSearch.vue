<template>
  <div class="flex w-4/5 flex-col items-center justify-center">
    <h2 class="mb-8 text-3xl font-bold">
      {{ t('your-city-is') + street }}
    </h2>
    <div class="relative w-full">
      <GMapAutocomplete
        :placeholder="street"
        class="h-16 w-full max-w-2xl rounded bg-dark px-5 text-light duration-1000 ease-in-out dark:bg-light dark:text-dark"
        @place_changed="setPlace"
      />
      <akar-icons:search
        class="absolute right-12 top-1/3 h-8 w-8 text-primary-active duration-1000 ease-in-out dark:dark:text-primary-light"
        style="transform: translateY(-10%)"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useI18n } from 'vue-i18n'
import type { Location } from '~/types/Location'
import { useLocationStore } from '~/stores/LocationStore'
const { t } = useI18n()

const location = useLocationStore()
const { street } = storeToRefs(location)
const setPlace = async(place: any) => {
  const coords: Location = {
    latitude: place.geometry.location.lat(),
    longitude: place.geometry.location.lng(),
    street: '',
  }
  location.setLocation(coords)
}
</script>
