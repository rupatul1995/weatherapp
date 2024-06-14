import { useEffect, useState } from "react";
import axios from 'axios'; 
import './weather.css';

function WeatherApp(){
    const[WeatherApp , setWeatherApp]=useState([]);
    console.log(WeatherApp ,"WeatherApp");
  
    async function GetWeatherApp(){
        // const axios = require('axios');
const options = {
  method: 'GET',
  url: 'https://yahoo-weather5.p.rapidapi.com/weather',
  params: {
    location: 'Mumbai',
    format: 'json',
    u: 'f'
  },
  headers: {
    'x-rapidapi-key': '9a6d68bb0bmsh2e0d43dddf0b680p197e09jsnca1db0b1f4b5',
    'x-rapidapi-host': 'yahoo-weather5.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
	console.log([response.data]);
    setWeatherApp([response.data])
} catch (error) {
	console.error(error);
}
}
    useEffect(()=>{
  GetWeatherApp();
    },[]);
  

    return(
       <div>
         
        {WeatherApp.map((response)=>(
               
<div class="maindiv">
    <div class="rightdiv">

     <div class="rightdiv1">
        <h1 class="city">{response.location.city}</h1>
        <p class="country">{response.location.country}</p>
     </div>

     <div class="astronomy">
     <p>sunrise:"5:47 AM"</p>
        <p>sunset:"8:30 PM"</p>
    </div>

     <div class="timetem">
        <div class="time">
        <h1>{new Date((response.current_observation.pubDate)*1000).toLocaleString()} </h1>
  
    </div>
        <div class="cloudy">
        <h1>{response.current_observation.condition.text}</h1>
        <h4 className="tempre">{response.current_observation.condition.temperature}&deg;F</h4>
    </div>
     </div>

     <div></div>
    </div>

    <div class="leftdiv">
        {/* <input name="name" value={}/> */}
    {/* <div class="astronomy">
     <p>sunrise:"5:47 AM"</p>
        <p>sunset:"8:30 PM"</p>
    </div> */}
    
        <table class="tablediv">
            <thead>
                <tr class="tablehead">
                    <th>Day</th>
                    <th id="tablehead1">Date</th>
                    <th>Higest temperature</th>
                    <th>Lowest temperature</th>
                    <th>Weather</th>
                </tr>
            </thead>
            <tbody>
                <tr class="tablerow1">
                    <td>{response.forecasts[0].day}</td>
                    <td>{new Date((response.forecasts[0].date)*1000).toLocaleString().split(',')[0]}</td>
                    <td>{response.forecasts[0].high}</td>
                    <td>{response.forecasts[0].low}</td>
                    <td>{response.forecasts[0].text}</td>
                </tr>
                <tr class="tablerow2">
                    <td>{response.forecasts[1].day}</td>
                    <td>{new Date((response.forecasts[1].date)*1000).toLocaleString().split(',')[0]}</td>
                    <td>{response.forecasts[1].high}</td>
                    <td>{response.forecasts[1].low}</td>
                    <td>{response.forecasts[1].text}</td>
                </tr>
                <tr class="tablerow3"> 
                    <td>{response.forecasts[2].day}</td>
                    <td>{new Date((response.forecasts[2].date)*1000).toLocaleString().split(',')[0]}</td>
                    <td>{response.forecasts[2].high}</td>
                    <td>{response.forecasts[2].low}</td>
                    <td>{response.forecasts[2].text}</td>
                </tr>
                <tr class="tablerow4">
                    <td>{response.forecasts[3].day}</td>
                    <td>{new Date((response.forecasts[3].date)*1000).toLocaleString().split(',')[0]}</td>
                    <td>{response.forecasts[3].high}</td>
                    <td>{response.forecasts[3].low}</td>
                    <td>{response.forecasts[3].text}</td>
                </tr>
                <tr class="tablerow5">
                    <td>{response.forecasts[4].day}</td>
                    <td>{new Date((response.forecasts[4].date)*1000).toLocaleString().split(',')[0]}</td>
                    <td>{response.forecasts[4].high}</td>
                    <td>{response.forecasts[4].low}</td>
                    <td>{response.forecasts[4].text}</td>
                </tr>
                <tr class="tablerow5">
                    <td>{response.forecasts[5].day}</td>
                    <td>{new Date((response.forecasts[5].date)*1000).toLocaleString().split(',')[0]}</td>
                    <td>{response.forecasts[5].high}</td>
                    <td>{response.forecasts[5].low}</td>
                    <td>{response.forecasts[5].text}</td>
                </tr>
                <tr class="tablerow6">
                    <td>{response.forecasts[6].day}</td>
                    <td>{new Date((response.forecasts[6].date)*1000).toLocaleString().split(',')[0]}</td>
                    <td>{response.forecasts[6].high}</td>
                    <td>{response.forecasts[6].low}</td>
                    <td>{response.forecasts[6].text}</td>
                </tr>
                <tr class="tablerow7">
                    <td>{response.forecasts[7].day}</td>
                    <td>{new Date((response.forecasts[7].date)*1000).toLocaleString().split(',')[0]}</td>
                    <td>{response.forecasts[7].high}</td>
                    <td>{response.forecasts[7].low}</td>
                    <td>{response.forecasts[7].text}</td>
                </tr>
               
            </tbody>
        </table>
    </div>

    </div>

        ))}
   
       </div>
      
    
    );
}
export default WeatherApp;