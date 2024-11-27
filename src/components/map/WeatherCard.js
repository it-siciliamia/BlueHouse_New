import "./WeatherMap.css";
import { FaCloud } from "react-icons/fa";
import { FaSun } from "react-icons/fa";

const WeatherCard = ({ temperature, atmosphere }) => {
  return (
    <div className="container">
      <div className="card">
        <p className="temp">{temperature} C</p>
      {/*
      Maybe we can add more icons based on the weather. Based on the weather API, there is a meter that measures clouds from 0-100 and based on that number we can add a cloud or a sun
      
      */}
       {
        atmosphere > 50 ?  <FaCloud /> :
        <FaSun color="yellow" />
       } 

        <p className="city">Reykjavik, Iceland</p>
      </div>
    </div>
  );
};

export default WeatherCard;
