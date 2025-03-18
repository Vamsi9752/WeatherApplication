import React, { useState } from 'react'
import './Weather.css'
import axios from 'axios';
const key="31i2RO0TYj4feBaYo9LMgvj5RfrtDslg";
function Weather() {
           const [City,setcity]=useState('');
           const[weather,setweather]=useState(null);
           const[error,seterror]=useState(false);
           let searchweather=async ()=>{
            try{
                let response=await axios.get(`https://api.tomorrow.io/v4/weather/realtime?location=${City}&apikey=${key}`)
                console.log(response.data);
                setweather(response)
            }
            catch(error){
                seterror(true)
            }
           }
    
  return (
    <div className='container'>
      <h1>Search Weather COndition</h1>
      <div className='inputContainer'>
      <input type='text' placeholder='Enter City Name' className='input' value={City} onChange={(e)=>setcity(e.target.value)}></input>
      <button className='button' onClick={searchweather}>Search</button>
      </div>
      
      <div>
        {error&&<p className='error'>Failed to Fetch Data</p>}
        {weather&& (
            <div className='weathercontainer'>
                <h2 className='subtitle'> {weather.data.location.name}</h2>
                <p className='temperature'>Temperature:{weather.data.data.values.temperature}<sup>O</sup>C</p>
                <p className='humdity'>Humidty:{weather.data.data.values.humidity}%</p>
                <p className='windspeed'>WindSpeed:{weather.data.data.values.windSpeed}</p>
        </div>)}
      </div>
    </div>
    
  )
}

export default Weather
