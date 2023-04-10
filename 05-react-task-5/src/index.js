import React from 'react'
import style from './styles.module.css'

export const Button = ({ text, type }) => {
  // Taking incoming values and adding them to the component
  return <button className={`${style.btn} ${style[type]}`}>{text}</button>
}
