<template>
  <table class="mt-16 w-full divide-y text-right">
    <tr>
      <th>
        {{ t('date') }}
      </th>
      <th>{{ t('time') }}</th>
      <th>{{ t('feels-like') }}</th>
      <th>{{ t('temperature') }}</th>
      <th>{{ t('humidity') }}</th>
      <th>{{ t('description') }}</th>
    </tr>
    <tr v-for="w in weather" :key="w">
      <td>
        {{ w.dt_txt.split(' ')[0] }}
      </td>
      <td>{{ w.dt_txt.split(' ')[1] }}</td>
      <td>{{ `${w.main.feels_like} ${unitSymbol}` }}</td>
      <td>{{ `${w.main.temp} ${unitSymbol}` }}</td>
      <td>{{ `${w.main.humidity} %` }}</td>
      <td>
        {{
          `${
            w.weather[0].description[0].toUpperCase() +
            w.weather[0].description.substring(1)
          }`
        }}
      </td>
    </tr>
  </table>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { storeToRefs } from 'pinia'
import { useWeatherStore } from '~/stores/WeatherStore'

const { t } = useI18n()
const weatherStore = useWeatherStore()
const { weather, unitSymbol } = storeToRefs(weatherStore)
</script>
