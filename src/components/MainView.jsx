import '../styles/MainView.css'
import { useState, useEffect } from 'react'
import TodayView from './TodayView'
import ForecastView from './ForecastView'
import Highlights from './Highlights'

const MainView = ({ isDarkMode, dayOption, dataWeather }) => {
  const [dataWeatherSelected, setDataWeatherSelected] = useState([])

  useEffect(() => {
    setDataWeatherSelected(dataWeather.data ? dataWeather.data[0] : [])
  }, [dataWeather.data])

  return (
    <section className='main-view'>
      {
        dayOption === 'Today'
          ? <TodayView isDarkMode={isDarkMode} dataWeather={dataWeather} setDataWeatherSelected={setDataWeatherSelected} />
          : <ForecastView isDarkMode={isDarkMode} dataWeather={dataWeather} dataWeatherSelected={dataWeatherSelected} setDataWeatherSelected={setDataWeatherSelected} />
      }
      <Highlights dataWeather={dataWeatherSelected} isDarkMode={isDarkMode} />
    </section>
  )
}

export default MainView
