import '../styles/Aside.css'
import SetRiseGraphic from './SetRiseGraphic'
import { SoonIcon, MoonIcon } from './Icons'
import uvRisk from '../functions/uvRisk'

const Aside = ({ dataWeather, isDarkMode }) => {
  return (
    <aside className={`aside ${isDarkMode ? 'aside__night' : ''}`}>
      <h2>Today's Weather</h2>
      <div className='info--container'>
        <SetRiseGraphic
          title='Sun'
          setTime={dataWeather?.sunset_ts}
          riseTime={dataWeather?.sunrise_ts}
          Icon={SoonIcon}
          isDarkMode={isDarkMode}
        />
        <div className='uv-card'>
          <div className='uv-card--icon'>
            {!isDarkMode ? <SoonIcon /> : <MoonIcon />}
          </div>
          <div className='uv-card-body'>
            <div className='uv-card--info'>
              <h3>{dataWeather?.uv} UVI</h3>
              <div className='uv-card--info-risk'>
                {uvRisk(dataWeather?.uv)}
              </div>
            </div>
            <div className='uv-card--description'>
              <p>{uvRisk(dataWeather?.uv)} risk of from UV rays</p>
            </div>
          </div>
        </div>
        <SetRiseGraphic
          title='Moon'
          setTime={dataWeather?.moonset_ts}
          riseTime={dataWeather?.moonrise_ts}
          Icon={MoonIcon}
          isMoon
          isDarkMode={isDarkMode}
        />
      </div>
    </aside>
  )
}

export default Aside
