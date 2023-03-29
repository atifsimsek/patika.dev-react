import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { createContext } from "react";
import days from "../data/days"




const WeatherProvider = ({ children }) => {

    const [weather, setWeather] = useState({})
    const [activeDay, setActiveDay] = useState(0)
    const [city, setCity] = useState("SINOP")

    console.log(city)

    useEffect(() => {

        console.log("test")

        const getWeather = async () => {

            try {
                const { data } = await axios.get(`http://api.weatherapi.com/v1/forecast.json?key=${process.env.REACT_APP_API_KEY} &q=${city}&days=7&aqi=no&alerts=no`)
                setWeather(data)
            } catch (error) {

                console.log("Veri Çekilirken Bir Hata oluştu")

            }
        }

        getWeather()

    }, [city])



    const values = {
        weather,
        days,
        activeDay,
        city,
        setActiveDay,
        setCity,
        today: days[new Date().getDay()]
    }


    return (
        <WeatherContext.Provider value={values}>
            {children}
        </WeatherContext.Provider>
    )
}


const WeatherContext = createContext()

export default WeatherProvider
export const useWeather = () => useContext(WeatherContext)

