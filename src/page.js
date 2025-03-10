import './styles/components/Main.scss';
import CurrentWeather from './components/CurrentWeather';
import Forecast from './components/Forecast';
import { useContext } from 'react';
import WeatherContext from './context/weather.context';
import Loader from './components/Loader';

function Page() {
const {loading, currentWeather, dailyForecast, hourlyForecast} = useContext(WeatherContext);

  return <div className='page'>
    {loading ? (
      <Loader/>
    ) : (
      <>
        <CurrentWeather data={currentWeather}/>
        <Forecast 
          type='hourly' 
          title='HOURLY FORECAST' 
          data={hourlyForecast}
        />
        <Forecast 
          type='dail' 
          title='21 DAYS FORECAST' 
          data={dailyForecast}
        />
      </>
    )}
  </div>;
}

export default Page;