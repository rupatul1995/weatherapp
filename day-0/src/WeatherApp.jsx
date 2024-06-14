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
        <h1 class="city">city</h1>
        <p class="country">country</p>
     </div>

     <div class="astronomy">
     <p>sunrise:"5:47 AM"</p>
        <p>sunset:"8:30 PM"</p>
    </div>

     <div class="timetem">
        <div class="time">
        <h1>10:25:21</h1>
        <p>15/06/24</p>
    </div>
        <div class="cloudy">
        <div>cloudy</div>
        <div>85f</div>
    </div>
     </div>

     <div></div>
    </div>

    <div class="leftdiv">
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
                    <td>day</td>
                    <td>new Date</td>
                    <td>high</td>
                    <td>low</td>
                    <td>text</td>
                </tr>
                <tr class="tablerow2">
                    <td>day</td>
                    <td>new Date</td>
                    <td>high</td>
                    <td>low</td>
                    <td>text</td>
                </tr>
                <tr class="tablerow3"> 
                    <td>day</td>
                    <td>new Date</td>
                    <td>high</td>
                    <td>low</td>
                    <td>text</td>
                </tr>
                <tr class="tablerow4">
                    <td>day</td>
                    <td>new Date</td>
                    <td>high</td>
                    <td>low</td>
                    <td>text</td>
                </tr>
                <tr class="tablerow5">
                    <td>day</td>
                    <td>new Date</td>
                    <td>high</td>
                    <td>low</td>
                    <td>text</td>
                </tr>
                <tr class="tablerow6">
                    <td>day</td>
                    <td>new Date</td>
                    <td>high</td>
                    <td>low</td>
                    <td>text</td>
                </tr>
                <tr class="tablerow7">
                    <td>day</td>
                    <td>new Date</td>
                    <td>high</td>
                    <td>low</td>
                    <td>text</td>
                </tr>
                <tr class="tablerow8">
                    <td>day</td>
                    <td>new Date</td>
                    <td>high</td>
                    <td>low</td>
                    <td>text</td>
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