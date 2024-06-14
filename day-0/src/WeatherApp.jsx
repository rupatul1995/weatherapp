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
            'x-rapidapi-key': 'd328ea5cf5msha0339b0526fc2f0p170e62jsn588b66a35588',
            'x-rapidapi-host': 'yahoo-weather5.p.rapidapi.com'
          }
        };
        
        try {
            const response = await axios.request(options);
            console.log([response.data]);
            setWeatherApp([response.data]);
           
        } catch (error) {
            console.error(error);
        }
    }
  
    useEffect(()=>{
  GetWeatherApp();
    },[]);
  

    return(
       <div>
         {/* <head>
         <link rel="stylesheet" href= "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"     />
         </head> */}

        {WeatherApp.map((response)=>(
         <div>
          <h1>hiiii</h1>
         </div>

       
        ))}
   
       </div>
      
    
    );
}
export default WeatherApp;