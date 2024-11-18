import "./WeatherMap.css";

const WeatherCard = ({ temperature }) => {
  return (
    <div className="container">
      <div className="card">
        <p className="weather">Weather in Reykjavik</p>
        <p className="city">Iceland</p>
        <p className="temp">{temperature} °C</p>
      </div>
    </div>
  );
};

export default WeatherCard;
