//src/components/WeatherForcast/WeatherForcast.jsx

import WeatherIcon from '../WeatherIcon/WeatherIcon.jsx'
import WeatherData from '../WeatherData/WeatherData.jsx'
import './WeatherForcast.css'

const WeatherForcast = ({ day, img, imgAlt, conditions, time }) => {
    return(
        <div className="weather">
            <WeatherData day={day} conditions={conditions} time={time} />
            <WeatherIcon img={img} imgAlt={imgAlt} />
        </div>
    );
};

export default WeatherForcast;