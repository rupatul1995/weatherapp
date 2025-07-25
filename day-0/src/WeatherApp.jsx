import { useEffect, useState } from "react";
import axios from 'axios';
import './weather.css';

function WeatherApp() {
  const [weatherData, setWeatherData] = useState([]);
  const [city, setCity] = useState("Mumbai");
  const [input, setInput] = useState("Mumbai");

  async function GetWeatherApp(cityName) {
    const options = {
  method: 'GET',
  url: 'https://yahoo-weather5.p.rapidapi.com/weather',
  params: {
    location: cityName,
    format: 'json',
    u: 'f'
  },
  headers: {
    'x-rapidapi-key': 'a05a001da2mshbb6565fdeacf0b6p182455jsn53155b987652',
    'x-rapidapi-host': 'yahoo-weather5.p.rapidapi.com'
  }
};


    try {
      const response = await axios.request(options);
      setWeatherData([response.data]);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    GetWeatherApp(city);
  }, []);

  const handleSearch = () => {
    setCity(input);
    GetWeatherApp(input);
  };

  return (
    <div>
     

      {weatherData.map((response, idx) => (
        <div className="maindiv" key={idx}>
          <div className="rightdiv">
            <div className="rightdiv1">
              <h1 className="city">{response.location.city}</h1>
              <p className="country">{response.location.country}</p>
            </div>

            <div className="astronomy">
            </div>

            <div className="timetem">
              <div className="time">
                <h1>
                  {new Date(response.current_observation.pubDate * 1000).toLocaleString()}
                </h1>
                
              </div>
              <div className="cloudy">
                <h1>{response.current_observation.condition.text}</h1>
                <h4 className="tempre">
                  {response.current_observation.condition.temperature}&deg;F
                </h4>
              </div>
            </div>
          </div>

          <div className="leftdiv">
      <div className="search">
        <input
          className="search1"
          value={input}
          placeholder="enter city"
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
           
          </div>
        </div>
      ))}
    </div>
  );
}

export default WeatherApp;
