import { useWeather } from "../../context/WeatherContext"
import style from "./activeDay.module.scss"



const ActiveDay = () => {


  const { weather,activeDay } = useWeather()

  console.log(weather.location.name)
  
  return (
    <div className={style.activeCard}>
      <h3>{weather?.location?.name.toUpperCase()}</h3>
      <div className={style.info}>
        <p>{weather?.forecast?.forecastday[activeDay].day.condition.text}</p>
        <p>{weather?.forecast?.forecastday[activeDay].date}</p>
      </div>
      <img src={weather?.forecast?.forecastday[activeDay].day.condition.icon} alt="" />
      <h1>{weather?.forecast?.forecastday[activeDay].day.avgtemp_c}°</h1>
      <div className={style.minmax}>
        <div className={style.min}>
          <h4>min</h4>
          <p>{weather?.forecast?.forecastday[activeDay].day.mintemp_c}°</p>
        </div>
        <div className={style.max}>
          <h4>max</h4>
          <p>{weather?.forecast?.forecastday[activeDay].day.maxtemp_c}°</p>
        </div>
      </div>
    </div>
  )
}

export default ActiveDay