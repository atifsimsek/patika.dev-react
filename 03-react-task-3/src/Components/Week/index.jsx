import { useWeather } from '../../context/WeatherContext'
import styles from './week.module.scss'


const Week = () => {

  const {weather} = useWeather()
 console.log(weather)
  return (
    <div className={styles.week}>
      {/* <div className={`${styles.day} ${styles.active}`}>
        <h3>Wed</h3>
        <img src="http://openweathermap.org/img/wn/01d@2x.png" alt="" />
        <p>30°</p>
      </div> */}
    </div>
  )
}

export default Week