import '../styles/ForecastView.css'
import WeatherDayCard from './WeatherDayCard'

const ForecastView = ({ isDarkMode, dataWeather, dataWeatherSelected, setDataWeatherSelected }) => {
  return (
    <section className='main-view__forecast'>
      <ul className='weather-day-card--list'>
        {
          dataWeather.data?.map((data, index) => (
            <WeatherDayCard
              key={index}
              isDarkMode={isDarkMode}
              dataWeather={data}
              onClick={() => setDataWeatherSelected(data)}
              isActive={dataWeatherSelected.valid_date === data.valid_date}
            />
          ))
        }
      </ul>
    </section>
  )
}

export default ForecastView
