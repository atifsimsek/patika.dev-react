import style from './inputs.module.scss'
import { BiSearch } from "react-icons/bi"
import cities from "../../data/cities_of_turkey.json"
import { useWeather } from '../../context/WeatherContext'

const Inputs = () => {

  const { city, setCity } = useWeather()


  return (
    <div className={style.inputs}>
      <div className={style.inputBox}>
        <BiSearch size={23} />
        <input type="text" placeholder='Bir Şehir Girin' />
      </div>
      <label htmlFor="select"></label>
      <select onChange={(e) => { setCity(e.target.value) }} name="select">
        {cities.map(city => (
          <option key={city.id} value={city.name}>{city.name}</option>
        ))
        }
      </select>
    </div>
  )
}

export default Inputs