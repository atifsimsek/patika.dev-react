import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { createContext } from "react";


const WeatherProvider = ({ children }) => {

    const [weather, setWeader] = useState({})


    useEffect(() => {

        console.log("test")

        const getWeather = async () => {

            try {
                const { data } = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=Sinop&units=metric&appid=${process.env.REACT_APP_API_KEY}`)
                setWeader(data)
            } catch (error) {

                console.log("Veri Çekilirken Bir Hata oluştu")

            }
        }

        getWeather()

    }, [])



    const values = {
        weather
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

