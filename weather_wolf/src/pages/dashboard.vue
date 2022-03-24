<template>
  <transition>
    <div
      class="relative m-auto flex max-w-4xl flex-col items-center justify-center"
    >
      <WWModeSelectors class="mb-5 w-full" />
      <LocationSearch class="mb-5" />
      <WWDisplayWeather />
    </div>
  </transition>
</template>

<script lang="ts" setup>
import LocationSearch from '~/components/atoms/LocationSearch/LocationSearch.vue'
import WWModeSelectors from '~/components/molecules/WWModeSelectors/WWModeSelectors.vue'
import WWDisplayWeather from '~/components/organisms/WWDisplayWeather/WWDisplayWeather.vue'
</script>
