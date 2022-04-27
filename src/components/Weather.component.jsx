import "./Weather.style.css";

const Weather = ({
  name,
  country,
  temperature,
  description,
  maxTemperature,
  minTemperature,
  windSpeed,
}) => {
  return (
    <div className="weather-container">
      <div className="left">
        <h2>
          {name}, {country}
        </h2>
        <div className="temperature">{temperature}&#176;C</div>
        <div className="description">{description}</div>
      </div>
      <div className="right">
        <div className="column">
          <div>{maxTemperature}&#176;C</div>
          <div className="small">Maximum Temperature</div>
        </div>
        <div className="column">
          <div>{minTemperature}&#176;C</div>
          <div className="small">Minimum Temperature</div>
        </div>
        <div className="column">
          <div>{windSpeed}</div>
          <div className="small">Wind Speed</div>
        </div>
      </div>
    </div>
  );
};

export default Weather;
