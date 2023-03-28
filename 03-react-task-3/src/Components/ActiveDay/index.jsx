import style from "./activeDay.module.scss"



const ActiveDay = () => {

  return (
    <div className={style.activeCard}>
      <h3>SİNOP</h3>
      <div className={style.info}>
        <p>bulutlu</p>
        <p>parçalı bulutlu</p>
      </div>
      <img src="http://openweathermap.org/img/wn/01d@2x.png" alt="" />
      <h1>32°</h1>
      <div className={style.minmax}>
        <div className={style.min}>
          <h4>min</h4>
          <p>35°</p>
        </div>
        <div className={style.max}>
          <h4>max</h4>
          <p>36°</p>
        </div>
      </div>
    </div>
  )
}

export default ActiveDay