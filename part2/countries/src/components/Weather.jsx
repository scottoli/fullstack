import { useState, useEffect } from 'react'
import axios from 'axios'

function Weather({ country }) {
    const [weather, setWeather] = useState(null)
    useEffect(() => {
      axios
        .get(`https://api.openweathermap.org/data/2.5/weather?q=${country.capital},${country.name.common}&appid=${import.meta.env.VITE_WEATHER}`)
        .then((response) => setWeather(response.data))
    }, [])

    if (!weather) {
        return null
    }
    return (
        <div>
            <h2>Weather in {country.capital}</h2>
            <div>Temperature {(weather.main.temp - 273.15).toFixed(2)} Celsius</div>
            <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}/>
            <div>Wind {weather.wind.speed} m/s</div>
        </div>
    )
}

export default Weather