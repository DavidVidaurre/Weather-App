import API_URL from '../api/API_URL'
import { ERROR_MANY_REQUESTS } from '../constants/errors'

const getWeatherForecastByCity = async (city) => {
  try {
    const response = await fetch(`${API_URL}?city=${city}&key=${import.meta.env.VITE_API_KEY}&days=7`)
    if (response.status === 429) {
      throw new Error(ERROR_MANY_REQUESTS)
    }
    const data = await response.json()
    return data
  } catch (error) {
    console.log('Error: ' + error.toString())
    return error
  }
}

export default getWeatherForecastByCity
