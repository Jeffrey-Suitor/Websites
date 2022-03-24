<template>
  <button class="button-base" :class="type" :disabled="disabled">
    <slot />
  </button>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
defineProps({
  disabled: {
    type: Boolean,
    default: false,
  },
  type: {
    type: String,
    default: 'primary',
    validators(val: string) {
      return ['primary', 'secondary', 'tertiary'].includes(val)
    },
  },
})
</script>
<style lang="postcss" scoped>
.button-base {
  @apply inline-block w-full cursor-pointer justify-self-center rounded p-10 text-4xl duration-1000
          ease-in-out focus:ring disabled:cursor-default disabled:bg-disabledColor disabled:opacity-50;
}
.primary {
  @apply bg-primary-light text-white hover:bg-primary-active dark:bg-primary-dark dark:hover:bg-primary-light;
}
</style>
