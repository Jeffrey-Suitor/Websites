import { defineStore } from 'pinia'
import { userLocation } from '~/logics/storage'
import { Location } from '~/types/Location'
import { useWeatherStore } from '~/stores/WeatherStore'

const reverseGeocode = async(coords: Location) => {
  const res = await fetch(
    'http://api.openweathermap.org/geo/1.0/reverse'
      + `?lat=${coords.latitude}`
      + `&lon=${coords.longitude}`
      + '&limit=1'
      + `&appid=${import.meta.env.VITE_OPEN_WEATHER_API_KEY}`,
  )
  const data = await res.json()
  return `${data[0].name}, ${data[0].state}, ${data[0].country}`
}

const weatherStore = useWeatherStore()

export const useLocationStore = defineStore('location', {
  state: () => {
    weatherStore.updateWeather(userLocation.value)
    return {
      ...userLocation.value,
    }
  },
  actions: {
    async setLocation(coords: Location) {
      this.latitude = coords.latitude
      this.longitude = coords.longitude
      this.street = await reverseGeocode(coords)
      userLocation.value = coords
      weatherStore.updateWeather(coords)
    },
  },
})
