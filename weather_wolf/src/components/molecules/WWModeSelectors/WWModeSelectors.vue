<template>
  <div class="w-30 left-0 my-auto flex h-32 justify-evenly">
    <LanguageSelector />
    <DarkModeSelector />
    <UnitSelector />
  </div>
</template>
<script setup lang="ts">
import LanguageSelector from '~/components/atoms/LanguageSelector/LanguageSelector.vue'
import DarkModeSelector from '~/components/atoms/DarkModeSelector/DarkModeSelector.vue'
import UnitSelector from '~/components/atoms/UnitSelector/UnitSelector.vue'
</script>
