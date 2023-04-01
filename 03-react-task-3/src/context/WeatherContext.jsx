import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { createContext } from "react";
import days from "../data/days"
import cities from "../data/cities_of_turkey.json"




const WeatherProvider = ({ children }) => {

    const [weather, setWeather] = useState({})
    const [activeDay, setActiveDay] = useState(0)
    const [city, setCity] = useState("Sakarya")
    const [error, setError] = useState(false)


// Find user location

    navigator.geolocation.getCurrentPosition((position) => {

        cities.forEach(item => {

            const latitude = Math.floor(position.coords.latitude)
            const longitude = Math.floor(position.coords.longitude)

            if (Math.floor(item.latitude) === latitude && Math.floor(item.longitude) === longitude) {
                setCity(item.name)
            }
        })
    });


    useEffect(() => {

        const getWeather = async () => {


            // Requesting data and error handling processes
            try {
                const { data } = await axios.get(`https://api.weatherapi.com/v1/forecast.json?key=${process.env.REACT_APP_API_KEY} &q=${city}&days=7&aqi=no&alerts=no`)
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

