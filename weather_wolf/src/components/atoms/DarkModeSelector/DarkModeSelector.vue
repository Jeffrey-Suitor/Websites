<template>
  <div @click="toggleDark">
    <carbon:moon v-if="isDark" class="base h-8 w-8" />
    <carbon:sun v-else class="base h-8 w-8" />
    <p class="base pl-3">
      {{ modeText }}
    </p>
  </div>
</template>
<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { toggleDark, isDark } from '~/logics'
const { t } = useI18n()
const modeText = computed((): string => {
  return isDark.value ? t('dark') : t('light')
})
</script>

<style lang="postcss" scoped>
.base {
  @apply inline text-dark duration-1000 ease-in-out dark:text-light;
}
</style>
