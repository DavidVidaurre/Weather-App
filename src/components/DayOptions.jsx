import '../styles/DayOptions.css'
import dayOptions from '../mocks/dayOptions'

const DayOptions = ({ isDarkMode, dayOption, setDayOption }) => {
  const handleClick = (e) => {
    setDayOption(e.target.innerText)
  }

  return (
    <div className='day-options'>
      <ul className={`principal--options ${isDarkMode ? 'principal--options__night' : ''}`}>
        {
            dayOptions.map(option => (
              <li
                key={option.value}
                className={`option ${dayOption === option.value ? 'active' : ''}`}
                onClick={handleClick}
              >
                {option.value}
              </li>
            ))
        }
      </ul>
      <div className={`day-option--description ${isDarkMode ? 'day-option--description__night' : ''}`}>
        {
          dayOption === 'Today'
            ? <p>Weather</p>
            : <p>Forecast</p>
        }
      </div>
    </div>
  )
}

export default DayOptions
