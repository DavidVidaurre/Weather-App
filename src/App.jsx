import './App.css'
import { useState, useEffect } from 'react'
import Header from './components/Header'
import MainContent from './components/MainContent'
import getWeatherForecastByCoords from './services/getWeatherForecastByCoords'
import Loader from './components/Loader'
import ModalError from './components/ModalError'
import { userConfig } from './functions/userConfig'
import defaultLocation from './constants/location'
import { ERROR_MANY_REQUESTS, ERROR_FAILED_TO_FETCH, ERROR_MESSAGE } from './constants/errors'

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(userConfig.isDarkMode || false)
  const [data, setData] = useState({})
  const [searchValue, setSearchValue] = useState('')
  const [loading, setLoading] = useState(false)
  const [errorModal, setErrorModal] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  const getWeather = async (latitude, longitude) => {
    setLoading(true)
    const weather = await getWeatherForecastByCoords(latitude, longitude)
    if (weather.toString() === ERROR_MANY_REQUESTS || weather.toString() === ERROR_FAILED_TO_FETCH) {
      setErrorModal(true)
      setErrorMessage(ERROR_MESSAGE)
      setLoading(false)
      return
    }
    setData(weather)
    setLoading(false)
  }

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords
        getWeather(latitude, longitude)
      },
      (error) => {
        console.log(error)
        getWeather(defaultLocation.latitude, defaultLocation.longitude)
      }
    )
  }, [])

  return (
    <div className={`App ${isDarkMode ? 'background-color__dark' : ''}`}>
      {loading && <Loader />}
      {errorModal && <ModalError setErrorModal={setErrorModal} errorMessage={errorMessage} />}
      <section className='app--container'>
        <Header
          isDarkMode={isDarkMode}
          setIsDarkMode={setIsDarkMode}
          setData={setData}
          location={data.data ? `${data.city_name}, ${data.country_code}` : ''}
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          setLoading={setLoading}
          setErrorModal={setErrorModal}
          setErrorMessage={setErrorMessage}
        />
        <MainContent isDarkMode={isDarkMode} dataWeather={data} />
      </section>
    </div>
  )
}

export default App
