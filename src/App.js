import hotBg from './assets/hot.png';
import coldBg from './assets/cold.png';
import Descriptions from './components/Descriptions';
import { useEffect, useState } from 'react';
import { getFormattedWeatherData } from './weatherService';

function App() {
  const [city, setCity] = useState('Paris');
  const [weather, setWeather] = useState(null);
  const [units, setUnits] = useState('imperial');
  const [bg, setBg] = useState(hotBg);
  const [buttonText, setButtonText] = useState('°F');

  useEffect(() => {
    const fetchWeatherData = async () => {
      const data = await getFormattedWeatherData(city, units);
      setWeather(data);

      const threshold = units === 'imperial' ? 59 : 20;
      if (data.temp <= threshold) setBg(coldBg);
      else setBg(hotBg);
    };

    fetchWeatherData();
  }, [units, city]);

  const handleUnitsClick = () => {
    if (units === 'imperial') {
      setUnits('metric');
      setButtonText('°C');
    } else {
      setUnits('imperial');
      setButtonText('°F');
    }
  };

  const enterKeyPressed = (e) => {
    if (e.keyCode === 13) {
      setCity(e.currentTarget.value);
      e.currentTarget.blur();
    }
  };

  return (
    <div className='app' style={{ backgroundImage: `url(${bg})` }}>
      <div className='overlay'>
        {weather && (
          <div className='container'>
            <div className='section section__input'>
              <input
                onKeyDown={enterKeyPressed}
                type='text'
                name='city'
                placeholder='Enter City...'
              />
              <button onClick={(e) => handleUnitsClick(e)}>{buttonText}</button>
            </div>
            <div className='section section__temperature'>
              <div className='icon'>
                <h3>{`${weather.name}, ${weather.country}`}</h3>
                <img src={weather.iconURL} alt='weatherIcon' />
                <h3>{weather.description}</h3>
              </div>
              <div className='temperature'>
                <h1>{`${weather.temp.toFixed()}° ${
                  units === 'imperial' ? 'F' : 'C'
                }`}</h1>
              </div>
            </div>

            {/*bottom description*/}
            <Descriptions weather={weather} units={units} />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
