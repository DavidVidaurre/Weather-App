import '../styles/WeatherDayCard.css'
import { WeatherIcon } from './WeatherIcon'

const WeatherDayCard = ({ isDarkMode, dataWeather, onClick, isActive }) => {
  return (
    <li
      className={`weather-day-card ${isDarkMode ? 'weather-day-card__night' : ''} ${isActive ? 'active' : ''}`}
      onClick={onClick}
    >
      <div className='weather-day-card--header'>
        <h3>{dataWeather.valid_date}</h3>
      </div>
      <div className={`weather-day-card--body ${isActive ? 'no-gap' : ''}`}>
        <WeatherIcon code={dataWeather.weather?.code} isDarkMode={isDarkMode} />
        <p>{dataWeather.temp}°C</p>
      </div>
      <div className={`weather-day-card--footer ${isActive ? 'show-footer' : ''}`}>
        <p>Max: {dataWeather.max_temp}°C</p>
        <p>Min: {dataWeather.min_temp}°C</p>
      </div>
    </li>
  )
}

export default WeatherDayCard
