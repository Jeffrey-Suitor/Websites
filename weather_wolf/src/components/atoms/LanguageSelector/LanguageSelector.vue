<template>
  <div class="flex w-min flex-col">
    <div
      class="flex w-min cursor-pointer items-center justify-between"
      @click="toggleOpen"
    >
      <ic:round-language class="base h-8 w-8" />
      <p class="base ml-3">
        {{ t(languages[userLanguage as keyof typeof languages]) }}
      </p>
      <bi:x-lg v-if="isOpen" class="base ml-3 h-4 w-4" />
      <tabler:letter-v v-else class="base ml-3 h-4 w-4" />
    </div>
    <div v-if="isOpen" class="self-end">
      <p
        v-for="localeOption in unusedLocales"
        :key="localeOption"
        class="cursor-pointer font-semibold text-primary-active duration-1000 ease-in-out dark:text-primary-light"
        @click="setLocale(localeOption as 'en' | 'fr')"
      >
        {{ t(languages[localeOption as keyof typeof languages]) }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { userLanguage } from '~/logics/storage'
import { useWeatherStore } from '~/stores/WeatherStore'
const { locale, availableLocales, t } = useI18n()
const { setLanguage } = useWeatherStore()

const languages = {
  en: 'en',
  fr: 'fr',
  default: 'locale-not-found',
}

const isOpen = ref(false)
const toggleOpen = () => {
  isOpen.value = !isOpen.value
}
const setLocale = (desiredLocale: 'en' | 'fr') => {
  locale.value = desiredLocale
  userLanguage.value = desiredLocale
  setLanguage(desiredLocale)
  toggleOpen()
}

const unusedLocales = computed(() => {
  return availableLocales.filter(
    localeOptions => localeOptions !== userLanguage.value,
  )
})

locale.value = userLanguage.value
</script>

<style lang="postcss" scoped>
.base {
  @apply inline text-dark duration-1000 ease-in-out dark:text-light;
}
</style>
