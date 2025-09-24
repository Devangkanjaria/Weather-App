import SearchBox from "./SearchBox"
import InfoBox from "./InfoBox"
import { useState } from "react"
export default function WeatherApp(){
    const [weatherInfo,setWeatherInfo]=useState({
        city:"wonderland",
        feelslike:28.84,
        temp:25.05,
        tempMin:25.05,
        tempMax:25.05,
        humidity:47,
        weather:"haze",
    }
);

let updateInfo=(newinfo)=>{
    setWeatherInfo(newinfo);
}
    return (
        <div style={{textAlign:"center"}}>
            <h2>Weather App By Devang</h2>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    )
}