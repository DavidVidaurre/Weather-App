import '../styles/TodayView.css'
import WeatherTempCard from './WeatherTempCard'
import WeatherWindCard from './WeatherWindCard'
import { celsiusToFarenheit } from '../functions/degreeConverter'
import { useEffect } from 'react'

const TodayView = ({ isDarkMode, dataWeather, setDataWeatherSelected }) => {
  useEffect(() => {
    setDataWeatherSelected(dataWeather.data ? dataWeather.data[0] : [])
  }, [dataWeather])

  return (
    <section className='main-view__today'>
      <WeatherTempCard
        isDarkMode={isDarkMode}
        code={dataWeather.data ? dataWeather.data[0].weather?.code : ''}
        weatherNum={dataWeather.data ? `${dataWeather.data[0].temp} °C` : ''}
        weatherDescription={dataWeather.data ? dataWeather.data[0].weather?.description : ''}
        weatherNumAside={dataWeather.data ? `${celsiusToFarenheit(dataWeather.data[0].temp)} °F` : ''}
        preesure={dataWeather.data ? Math.round(dataWeather.data[0].pres) : ''}
        visibility={dataWeather.data ? dataWeather.data[0].vis : ''}
        humidity={dataWeather.data ? dataWeather.data[0].rh : ''}
      />
      <WeatherWindCard
        isDarkMode={isDarkMode}
        windSpeed={dataWeather.data ? dataWeather.data[0].wind_spd : ''}
        windDirection={dataWeather.data ? dataWeather.data[0].wind_cdir_full : ''}
        windDirectionAbbr={dataWeather.data ? dataWeather.data[0].wind_cdir : ''}
        windDirectionDegrees={dataWeather.data ? `${dataWeather.data[0].wind_dir} °` : ''}
      />
    </section>
  )
}

export default TodayView
