
import './App.css';
import {Route, Routes} from 'react-router-dom';
import WeatherApp from './WeatherApp';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/weather-app" element={<WeatherApp/>}/>
      </Routes>
    </div>
  );
}

export default App;
