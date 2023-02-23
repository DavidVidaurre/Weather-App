import '../styles/WeatherTempCard.css'
import WeatherCard from './WeatherCard'
import { WeatherIcon } from './WeatherIcon'

const WeatherTempCard = ({ isDarkMode, code, weatherNum, weatherDescription, weatherNumAside, preesure, visibility, humidity }) => {
  return (
    <WeatherCard
      isDarkMode={isDarkMode}
      isDelayCloud
      IconComponent={() => <WeatherIcon code={code} isDarkMode={isDarkMode} />}
      title='Weather'
      subtitle="What's the weather"
      weatherNum={weatherNum}
      weatherDescription={weatherDescription}
      weatherNumAside={weatherNumAside}
    >
      <div className='weather-card--footer'>
        <div className='weather-card--footer-card bg-color-1'>
          <p>Preesure</p>
          <h3>{preesure}mb</h3>
        </div>
        <div className='weather-card--footer-card bg-color-2'>
          <p>Visibility</p>
          <h3>{visibility !== '' ? visibility.toFixed(2) : ''}km</h3>
        </div>
        <div className='weather-card--footer-card bg-color-3'>
          <p>Humidity</p>
          <h3>{humidity}%</h3>
        </div>
      </div>
    </WeatherCard>
  )
}

export default WeatherTempCard
