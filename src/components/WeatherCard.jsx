import '../styles/WeatherCard.css'
import cloud1 from '../assets/cloud1.png'
import cloud2 from '../assets/cloud2.png'
import cloud3 from '../assets/cloud3.png'
import { SatelliteIcon } from './Icons'

const WeatherCard = ({ isDarkMode = false, IconComponent, title, subtitle, weatherNum, weatherDescription, weatherNumAside, bgColorWeatherNumAside = 'var(--backgroundColor)', children }) => {
  return (
    <div className={`weather-card ${isDarkMode ? 'weather-card__night' : ''}`}>
      <div className='weather-card--background-images'>
        <SatelliteIcon isDarkMode={isDarkMode} />
        <img className='cloud cloud1 animate-cloud__5s' src={cloud1} alt='cloud1' />
        <img className='cloud cloud2 animate-cloud__20s' src={cloud2} alt='cloud2' />
        <img className='cloud cloud3 animate-cloud__10s' src={cloud3} alt='cloud3' />
      </div>
      <div className='weather-card--info'>
        <div className='weather-card--header'>
          <div className='weather-card--header--icon'>
            <IconComponent />
            {children.icon}
          </div>
          <div className={`weather-card--header--title ${isDarkMode ? 'weather-card--header--title__night' : ''}`}>
            <h3>{title}</h3>
            <p>{subtitle}</p>
          </div>
        </div>
        <div className='weather-card--num'>
          <div className={`weather-card--num__principal ${isDarkMode ? 'weather-card--num__night' : ''}`}>
            <h3>{weatherNum}</h3>
            <p>{weatherDescription}</p>
          </div>
          <div className='weather-card--num__aside' style={{ backgroundColor: `${bgColorWeatherNumAside}` }}>
            <p>{weatherNumAside}</p>
          </div>
        </div>
        {children}
      </div>
    </div>
  )
}

export default WeatherCard
