import React, { useEffect, useRef, useState } from 'react'
import searchImg from '../assets/search.png'
import humidity from '../assets/humidity.png'
import wind from '../assets/wind.png'
import cloud from '../assets/cloud.png'
import drizzle from '../assets/drizzle.png'
import rain from '../assets/rain.png'
import snow from '../assets/snow.png'
import clear from '../assets/clear.png'

const Card = () => {
  const [weatherData, setWeatherData] = useState(null)

  const inputRef = useRef()

  const allIcons = {
    "01d": clear,
    "01n": clear,
    "02d": cloud,
    "02n": cloud,
    "03d": cloud,
    "03n": cloud,
    "04d": drizzle,
    "04n": drizzle,
    "09d": rain,
    "09n": rain,
    "10d": rain,
    "10n": rain,
    "13d": snow,
    "13n": snow,
  }

  const getData = async (city) => {
    if(city === ""){
        alert("Enter City Please !")
        return
    }
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${import.meta.env.VITE_APP_API}`
      const res = await fetch(url)
      const data = await res.json()
      console.log(data)

      const icon = allIcons[data.weather[0].icon] || clear
      setWeatherData({
        humidity: data.main.humidity,
        windSpeed: data.wind.speed,
        temperature: Math.floor(data.main.temp),
        location: data.name,
        icon: icon,
      })
    } catch (error) {
      alert(error);
    }
  }

  useEffect(() => {
    getData("Bankura")
  }, [])

  return (
    <div className="absolute top-[15vh] left-[37.5vw] w-[400px] h-[500px] p-4 bg-white border border-gray-200 rounded-lg">
      {/* Search box */}
      <div className="flex justify-center gap-2 mb-4">
        <input
          ref={inputRef}
          className="rounded-full border h-8 w-[180px] px-3"
          type="text"
          placeholder="Search City"
        />
        <img onClick={()=>{
            getData(inputRef.current.value)
        }} className="cursor-pointer w-[30px]" src={searchImg} alt="search" />
      </div>

      {/* Weather info */}
      {weatherData && (
        <>
          <div className="text-center mt-6">
            <p className="text-5xl font-bold text-gray-700">
              {weatherData.temperature}°C
            </p>
            <img
              className="mx-auto w-[100px]"
              src={weatherData.icon}
              alt="weather icon"
            />
            <p className="mt-2 text-lg font-semibold">
              {weatherData.location}
            </p>
          </div>

          {/* Humidity & Wind */}
          <div className="flex justify-around mt-10">
            <div className="text-center">
              <img className="w-10 mx-auto" src={humidity} alt="humidity" />
              <p className="text-xl">{weatherData.humidity}%</p>
              <p className="text-sm">Humidity</p>
            </div>
            <div className="text-center">
              <img className="w-10 mx-auto" src={wind} alt="wind" />
              <p className="text-xl">{weatherData.windSpeed} km/h</p>
              <p className="text-sm">Wind Speed</p>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default Card
