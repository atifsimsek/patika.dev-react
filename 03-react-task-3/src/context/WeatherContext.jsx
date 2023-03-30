import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { createContext } from "react";
import days from "../data/days"




const WeatherProvider = ({ children }) => {

    const [weather, setWeather] = useState({})
    const [activeDay, setActiveDay] = useState(0)
    const [city, setCity] = useState("Sinop")
    const [error, setError] = useState(false)


    useEffect(() => {

        const getWeather = async () => {


            // Requesting data and error handling processes
            try {
                const { data } = await axios.get(`http://api.weatherapi.com/v1/forecast.json?key=${process.env.REACT_APP_API_KEY} &q=${city}&days=7&aqi=no&alerts=no`)
                setWeather(data)
                setError(false)
            } catch (error) {
                setError(error.response)
                console.log(error.response)

            }
        }

        getWeather()

    }, [city])



    const values = {
        weather,
        days,
        activeDay,
        city,
        error,
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
export const useWeatherContext = () => useContext(WeatherContext)

