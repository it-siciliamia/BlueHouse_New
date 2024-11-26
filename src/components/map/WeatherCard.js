import "./WeatherMap.css";

const WeatherCard = ({ temperature, icon }) => {
  return (
    <div className="container">
      <div className="card">
        <p className="temp">{temperature} °C</p>
        <img className="city-icon" src={icon} alt="map" />
        <p className="city">Reykjavik, Iceland</p>
      </div>
    </div>
  );
};

export default WeatherCard;
