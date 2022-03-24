<template>
  <div class="w-full">
    <div class="grid w-full grid-cols-2">
      <div>
        <bi:sunrise class="m-auto h-40 w-40" />
        <h2>
          {{ t('sunrise') + ' : ' + sunriseText }}
        </h2>
      </div>
      <div>
        <bi:sunset class="m-auto h-40 w-40" />
        <h2>
          {{ t('sunset') + ' : ' + sunsetText }}
        </h2>
      </div>
    </div>
    <WWTable />
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { storeToRefs } from 'pinia'
import { computed } from 'vue'
import { useWeatherStore } from '~/stores/WeatherStore'
import WWTable from '~/components/molecules/WWTable/WWTable.vue'

const weatherStore = useWeatherStore()
const { sunrise, sunset } = storeToRefs(weatherStore)
const { t } = useI18n()

// Could fix this later by adding removing the localization.
const sunriseText = computed(() => {
  const sunriseDate = new Date(sunrise.value * 1000)
  return `${sunriseDate.getHours()}:${sunriseDate.getMinutes()}`
})

const sunsetText = computed(() => {
  const sunsetDate = new Date(sunset.value * 1000)
  return `${sunsetDate.getHours()}:${sunsetDate.getMinutes()}`
})
</script>
