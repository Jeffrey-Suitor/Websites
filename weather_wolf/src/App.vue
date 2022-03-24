<script setup lang="ts">
import { useHead } from '@vueuse/head'

// https://github.com/vueuse/head
// you can use this to manipulate the document head in any components,
// they will be renedered correctly in the html results with vite-ssg
useHead({
  title: 'Weather Wolf',
  meta: [
    {
      name: 'Weather Wolf',
      content: 'Getting you the weather so you can get outside',
    },
  ],
})
</script>

<template>
  <router-view />
</template>
