<script setup lang="ts">
import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
import WWButtonVue from '~/components/atoms/WWButton/WWButton.vue'
import WWModeSelectors from '~/components/molecules/WWModeSelectors/WWModeSelectors.vue'
const router = useRouter()
const login = () => router.push('/dashboard')
const { t } = useI18n()
</script>

<template>
  <div>
    <WWModeSelectors />
    <div
      class="flex flex-col items-center justify-center bg-white/30 backdrop-blur-md"
    >
      <h1
        class="text-5xl font-semibold text-dark duration-1000 ease-in-out dark:text-light"
      >
        {{ t('weather-wolf') }}
      </h1>

      <la-wolf-pack-battalion
        class="pulse-animation my-20 inline-block h-full w-3/4 select-none text-dark duration-1000 ease-in-out dark:text-light"
      />

      <WWButtonVue type="primary" @click="login">
        {{ t('nature-is-calling') }}
      </WWButtonVue>
    </div>
  </div>
</template>

<route lang="yaml">
meta:
  layout: home
</route>

<style scoped>
.pulse-animation {
  animation: pulse 5s cubic-bezier(0.4, 0, 0.6, 1) infinite;
  @keyframes pulse {
    0%,
    100% {
      opacity: 1;
    }
    50% {
      opacity: 0.7;
    }
  }
}
</style>
