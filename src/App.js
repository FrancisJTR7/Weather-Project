import hotBg from './assets/hot.png';
import coldBg from './assets/cold.png';

function App() {
  return (
    <div className='app' style={{ backgroundImage: `url(${coldBg})` }}>
      <div className='overlay'>
        <div className='container'>
          <div className='section section__input'>
            <input type='text' name='city' placeholder='Enter City...' />
            <button>°F</button>
          </div>
          <div className='section section__temperature'>
            <div className='icon'>
              <h3>London, GB</h3>
              <img
                src='https://icons.veryicon.com/png/o/miscellaneous/test-6/weather-91.png'
                alt='weatherIcon'
              />
              <h3>Cloudy</h3>
            </div>
            <div className='temperature'>
              <h1>34 °C</h1>
            </div>
          </div>

          {/*bottom description*/}
        </div>
      </div>
    </div>
  );
}

export default App;
