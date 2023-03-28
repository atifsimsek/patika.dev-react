import styles from './week.module.scss'

const Week = () => {
  return (
    <div className={styles.week}>
      <div className={`${styles.day} ${styles.active}`}>
        <h3>Wed</h3>
        <img src="http://openweathermap.org/img/wn/01d@2x.png" alt="" />
        <p>30°</p>
      </div>
      <div className={styles.day}>
        <h3>Wed</h3>
        <img src="http://openweathermap.org/img/wn/01d@2x.png" alt="" />
        <p>30°</p>
      </div>
      <div className={styles.day}>
        <h3>Wed</h3>
        <img src="http://openweathermap.org/img/wn/01d@2x.png" alt="" />
        <p>30°</p>
      </div>
      <div className={styles.day}>
        <h3>Wed</h3>
        <img src="http://openweathermap.org/img/wn/01d@2x.png" alt="" />
        <p>30°</p>
      </div>
      <div className={styles.day}>
        <h3>Wed</h3>
        <img src="http://openweathermap.org/img/wn/01d@2x.png" alt="" />
        <p>30°</p>
      </div>
      <div className={styles.day}>
        <h3>Wed</h3>
        <img src="http://openweathermap.org/img/wn/01d@2x.png" alt="" />
        <p>30°</p>
      </div>
      <div className={styles.day}>
        <h3>Wed</h3>
        <img src="http://openweathermap.org/img/wn/01d@2x.png" alt="" />
        <p>30°</p>
      </div>
    </div>
  )
}

export default Week