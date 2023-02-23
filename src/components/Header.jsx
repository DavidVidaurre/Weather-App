import '../styles/Header.css'
import { LocationIcon, SearchIcon } from './Icons'
import userIcon from '../assets/user/user.jpg'
import getWeatherForecastByCity from '../services/getWeatherForecastByCity'
import { setUserConfig } from '../functions/userConfig'
import { ERROR_SEARCH, ERROR_MANY_REQUESTS, ERROR_FAILED_TO_FETCH, ERROR_MESSAGE } from '../constants/errors'

const Header = ({ isDarkMode, setIsDarkMode, setData, location, searchValue, setSearchValue, setLoading, setErrorModal, setErrorMessage }) => {
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
    setUserConfig({ isDarkMode: !isDarkMode })
  }

  const handleChangeValue = (e) => setSearchValue(e.target.value)

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (searchValue === '') return
    setLoading(true)
    const weather = await getWeatherForecastByCity(searchValue)
    if (weather.toString() === ERROR_SEARCH || weather.toString() === ERROR_MANY_REQUESTS || weather.toString() === ERROR_FAILED_TO_FETCH) {
      setErrorModal(true)
      setErrorMessage(ERROR_MESSAGE)
    } else {
      setData(weather)
      setSearchValue('')
    }
    setLoading(false)
  }

  const handleChangeCheckbox = () => {
    setIsDarkMode(!isDarkMode)
    setUserConfig({ isDarkMode: !isDarkMode })
  }

  return (
    <header className='header'>
      <div className='header--location'>
        <div className='header--location--icon'>
          <LocationIcon isDarkMode={isDarkMode} />
        </div>
        <p className={`header--location--text ${isDarkMode ? 'header--location--text__night' : ''}`}>
          {location || 'Search location'}
        </p>
      </div>
      <form action='submit' className='header--search'>
        <div className={`header--input-search ${isDarkMode ? 'header--input-search__night' : ''}`}>
          <input
            type='text'
            placeholder='Search location'
            value={searchValue}
            onChange={handleChangeValue}
          />
          <button className='buttom-submit' type='submit' onClick={handleSubmit}>
            <SearchIcon isDarkMode={isDarkMode} />
          </button>
        </div>
      </form>
      <div className='toggleWrapper'>
        <input
          type='checkbox'
          className='dn'
          id='dn'
          checked={isDarkMode}
          onChange={handleChangeCheckbox}
          onClick={toggleDarkMode}
        />
        <label htmlFor='dn' className='toggle'>
          <span className='toggle__handler'>
            <span className='crater crater--1' />
            <span className='crater crater--2' />
            <span className='crater crater--3' />
          </span>
          <span className='star star--1' />
          <span className='star star--2' />
          <span className='star star--3' />
          <span className='star star--4' />
          <span className='star star--5' />
          <span className='star star--6' />
        </label>
      </div>
      <div className='header--user'>
        <img src={userIcon} alt='user' />
      </div>
    </header>
  )
}

export default Header
