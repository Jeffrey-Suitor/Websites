<template>
  <div class="flex w-min flex-col">
    <div
      class="flex w-min cursor-pointer items-center justify-between"
      @click="toggleOpen"
    >
      <fluent:temperature-24-regular
        class="inline h-8 w-8 text-dark duration-1000 ease-in-out dark:text-light"
      />
      <p
        class="ml-3 inline text-dark duration-1000 ease-in-out dark:text-light"
      >
        {{ unitSymbols[weatherStore.unit as keyof typeof unitSymbols] }}
      </p>
      <bi:x-lg
        v-if="isOpen"
        class="ml-3 inline h-4 w-4 text-dark duration-1000 ease-in-out dark:text-light"
      />

      <tabler:letter-v
        v-else
        class="ml-3 inline h-4 w-4 text-dark duration-1000 ease-in-out dark:text-light"
      />
    </div>
    <div v-if="isOpen" class="self-end">
      <p
        v-for="unitOption in unusedUnits"
        :key="unitOption"
        class="cursor-pointer font-semibold text-primary-active duration-1000 ease-in-out dark:text-primary-light"
        @click="setUnit(unitOption as weatherUnits)"
      >
        {{ unitSymbols[unitOption as keyof typeof unitSymbols] }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { useWeatherStore, unitSymbols } from '~/stores/WeatherStore'
import type { weatherUnits } from '~/stores/WeatherStore'
const weatherStore = useWeatherStore()

const isOpen = ref(false)
const toggleOpen = () => {
  isOpen.value = !isOpen.value
}
const setUnit = (desiredUnit: weatherUnits) => {
  weatherStore.setUnit(desiredUnit)
  toggleOpen()
}

const unusedUnits = computed(() => {
  return Object.keys(unitSymbols).filter(unit => unit !== weatherStore.unit)
})
</script>
