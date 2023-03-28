import style from './inputs.module.scss'
import { BiSearch } from "react-icons/bi"

const Inputs = () => {
  return (
    <div className={style.inputs}>
      <div className={style.inputBox}>
        <BiSearch size={23} />
        <input type="text" placeholder='Bir Şehir Girin' />
      </div>
      <label htmlFor="select"></label>
      <select name="select" id="">
        <option value="">deneme</option>
        <option value="">deneme</option>
        <option value="">deneme</option>
      </select>
    </div>
  )
}

export default Inputs