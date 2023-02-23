import '../styles/MainContent.css'
import DayOptions from './DayOptions'
import MainView from './MainView'
import Aside from './Aside'
import { useState } from 'react'

const MainContent = ({ isDarkMode, dataWeather }) => {
  const [dayOption, setDayOption] = useState('Today')

  return (
    <main className='main'>
      <section className='principal'>
        <DayOptions
          dayOption={dayOption}
          setDayOption={setDayOption}
          isDarkMode={isDarkMode}
        />
        <MainView
          isDarkMode={isDarkMode}
          dayOption={dayOption}
          dataWeather={dataWeather}
        />
      </section>
      <Aside dataWeather={dataWeather.data ? dataWeather.data[0] : []} isDarkMode={isDarkMode} />
    </main>
  )
}

export default MainContent
