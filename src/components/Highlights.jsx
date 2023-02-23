import '../styles/Highlights.css'
import HighlightCard from './HighlightCard'
import {
  WindSpeedIcon,
  CompassIcon,
  PressureIcon,
  VisibilityIcon,
  HumidityIcon,
  UltravioletIcon
} from './Icons'
import windSpeedBeaufort from '../functions/windSpeedBeaufort'

const Highlights = ({ dataWeather, isDarkMode }) => {
  return (
    <div className={`highlights--container ${isDarkMode ? 'highlights--container__night' : ''}`}>
      <h2>Highlights</h2>
      <div className='highlights'>
        <HighlightCard
          title='Wind Speed'
          date={dataWeather?.valid_date}
          value={dataWeather?.wind_spd}
          unit='km/h'
          Icon={() => <WindSpeedIcon speed={dataWeather.wind_spd ? windSpeedBeaufort(dataWeather.wind_spd) : 0} isDarkMode={isDarkMode} />}
          isDarkMode={isDarkMode}
        />
        <HighlightCard
          title='Wind Direction'
          date={dataWeather?.valid_date}
          value={dataWeather?.wind_cdir}
          unit=''
          Icon={() => <CompassIcon direction={dataWeather.wind_cdir} isDarkMode={isDarkMode} />}
          isDarkMode={isDarkMode}
        />
        <HighlightCard
          title='Pressure'
          date={dataWeather?.valid_date}
          value={dataWeather?.pres}
          unit='mb'
          Icon={PressureIcon}
          isDarkMode={isDarkMode}
        />
        <HighlightCard
          title='Visibility'
          date={dataWeather?.valid_date}
          value={dataWeather?.vis}
          unit='km'
          Icon={VisibilityIcon}
          isDarkMode={isDarkMode}
        />
        <HighlightCard
          title='Humidity'
          date={dataWeather?.valid_date}
          value={dataWeather?.rh}
          unit='%'
          Icon={HumidityIcon}
          isDarkMode={isDarkMode}
        />
        <HighlightCard
          title='UV Index'
          date={dataWeather?.valid_date}
          value={dataWeather?.uv}
          unit=''
          Icon={UltravioletIcon}
          isDarkMode={isDarkMode}
        />
      </div>
    </div>
  )
}

export default Highlights
