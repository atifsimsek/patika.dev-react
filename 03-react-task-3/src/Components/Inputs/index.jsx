import style from './inputs.module.scss'
import { BiSearch } from "react-icons/bi"
import cities from "../../data/cities_of_turkey.json"
import { useWeather } from '../../context/WeatherContext'
import { useState } from 'react'

const Inputs = () => {

  const [input, setInput] = useState("")
  const { city, setCity } = useWeather()


  const searchHandle = (e) => {

    if (e.key === "Enter" || e.button === 0) {
      setCity(input)
      setInput("")
    }
  }

  return (
    <div className={style.inputs}>
      <div className={style.inputBox}>
        <BiSearch onClick={searchHandle} size={23} />
        <input value={input} onKeyDown={(e) => searchHandle(e)} onChange={e => setInput(e.target.value)} type="text" placeholder='Bir Şehir Girin' />
      </div>
      <label htmlFor="select"></label>
      <select value={city} onChange={(e) => { setCity(e.target.value) }} name="select">
        {cities.map(city => (
          <option key={city.id} value={city.name}>{city.name}</option>
        ))
        }
      </select>
    </div>
  )
}

export default Inputs