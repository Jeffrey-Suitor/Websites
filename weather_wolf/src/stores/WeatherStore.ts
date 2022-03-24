import { defineStore } from 'pinia'
import { Location } from '~/types/Location'
import { userLocation, userLanguage } from '~/logics/storage'

export type weatherUnits = 'standard' | 'metric' | 'imperial'
export const unitSymbols = {
  standard: '°K',
  imperial: '°F',
  metric: '°C',
}

export const useWeatherStore = defineStore('weather', {
  state: () => {
    return {
      unit: 'standard',
      sunrise: 0,
      sunset: 0,
      timezone: 0,
      weather: [],
      unitSymbol: '°K',
      coords: userLocation.value,
      language: userLanguage.value,
    }
  },
  actions: {
    async updateWeather(coords: Location) {
      const res = await fetch(
        'https://api.openweathermap.org/data/2.5/forecast'
          + `?lat=${coords.latitude}`
          + `&lon=${coords.longitude}`
          + `&units=${this.unit}`
          + `&lang=${this.language}`
          + `&appid=${import.meta.env.VITE_OPEN_WEATHER_API_KEY}`,
      )
      const data = await res.json()
      this.sunrise = data.city.sunrise
      this.sunset = data.city.sunset
      this.weather = data.list
      this.timezone = data.city.timezone
      this.coords = coords
    },
    setUnit(unit: weatherUnits) {
      this.unit = unit
      this.unitSymbol = unitSymbols[unit]
      this.updateWeather(this.coords)
    },
    setLanguage(language: 'fr' | 'en') {
      this.language = language
      this.updateWeather(this.coords)
    },
  },
})
