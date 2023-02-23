import '../styles/WeatherWindCard.css'
import WeatherCard from './WeatherCard'
import { WindSpeedIcon } from './Icons'
import windSpeedBeaufort from '../functions/windSpeedBeaufort'

const WeatherWindCard = ({ isDarkMode = false, windSpeed = 0, windDirection, windDirectionAbbr, windDirectionDegrees }) => {
  const percent = (windSpeed / 117) * 100

  return (
    <WeatherCard
      isDarkMode={isDarkMode}
      IconComponent={() => <WindSpeedIcon speed={windSpeedBeaufort(windSpeed)} />}
      title='Wind Speed'
      subtitle={windDirection}
      weatherNum={windSpeed !== '' ? `${windSpeed} km/h` : ''}
      weatherDescription={windDirectionAbbr}
      weatherNumAside={windDirectionDegrees}
      bgColorWeatherNumAside='var(--themeGreenColor)'
    >
      <div className='weather-wind-card--progress-bar'>
        <div className='weather-wind-card--progress-bar--ranges'>
          <div className='weather-wind-card--progress-bar--ranges--range range-1'>Good</div>
          <div className='weather-wind-card--progress-bar--ranges--range range-2'>Standard</div>
          <div className='weather-wind-card--progress-bar--ranges--range range-3'>Hazardous</div>
        </div>
        <div className='weather-wind-card--progress-bar--bar'>
          <div className='weather-wind-card--progress-bar--bar--progress' style={{ width: `${windSpeed >= 117 ? 100 : percent}%` }} />
        </div>
      </div>
    </WeatherCard>
  )
}

export default WeatherWindCard
