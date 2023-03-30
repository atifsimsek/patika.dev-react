import { useWeather } from '../../context/WeatherContext'
import styles from './week.module.scss'


const Week = () => {


  const { weather, days, activeDay, setActiveDay, error } = useWeather()

  const forecast = weather?.forecast?.forecastday


  // Verilen Tarihleri gün adlarına çevirme

  const getDayName = (date) => {
    const dayName = days[new Date(date).getDay()]
    return dayName
  }


  // Seçilen günü bulma

  const handleClick = (date) => {
    const activeDayIndex = forecast.findIndex(item => item.date === date)
    const index = activeDayIndex !== -1 ? activeDayIndex : 0
    setActiveDay(index)
  }

  return (
    <div className={styles.week}>
      {!error &&
        weather?.forecast?.forecastday.map((day, index) => (
          <div onClick={() => { handleClick(day.date) }} key={index} className={`${styles.day}  ${day.date === forecast[activeDay].date ? styles.active : ""}`}>
            <h3>{getDayName(day.date)}</h3>
            <img src={day.day.condition.icon} alt="" />
            <p>{`${day.day.avgtemp_c}°`}</p>
          </div>
        ))
      }
    </div>
  )
}

export default Week