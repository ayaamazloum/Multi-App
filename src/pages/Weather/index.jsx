import "./style.css";

import { useEffect, useState } from "react";

const Weather = () => {
    const [city, setCity] = useState();
    const [currentDay, setCurrentDay] = useState();
    const [days, setDays] = useState([]);
    const [selected, setSelected] = useState(0);

    const getDay = (date) => {
        const dayOfWeek = new Date(date).getDay();
        const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        const dayName = daysOfWeek[dayOfWeek];
        return dayName.slice(0,3);
    };

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const options = { month: 'short', day: 'numeric', year: 'numeric' };
        return date.toLocaleDateString('en-US', options);
    };
    
    const fetchWeather = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                async (position) => { 
                try {
                    const response = await fetch(`https://api.weatherbit.io/v2.0/forecast/daily?key=d3ad8e2bd18d4eadbfe401334be35952&lat=${position.coords.latitude}&lon=${position.coords.longitude}&days=3`);
                    const data = await response.json();
                    setCity(data.city_name);
                    setCurrentDay(data.data[0]);
                    setDays(data.data);
                } catch (error) {
                    console.error('There was a problem with your fetch operation:', error);
                }
                },
                (error) => { console.error('Error getting location:', error); }
            );
        } else {
            console.error('Geolocation is not supported by this browser.');
        }
    }

    useEffect(() => {
        fetchWeather();
    }, []);

    return ( currentDay &&
        <div className="weather-page full-height full-width flex center">
            <header className="app-header flex row center">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-cloud"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" /></svg>
                <h1 className="white-text">weathery</h1>
            </header>
            <div className="weather-box rounded flex column center">
                <p className="larger-text bold">{city}</p>
                <p className="large-text bold">{getDay(currentDay.datetime)}</p>
                <div className="day-details flex row center">
                    <div className="flex column center">
                        <img className="weather-icon-current" src={require("../../assets/icons/"+currentDay.weather.icon+".png")}/>
                        <p className="large-text bold">{currentDay.weather.description}</p>
                    </div>
                    <p className="temp bold">{currentDay.temp} °C</p>
                    <div className="current-day flex column">
                        <p><span className="bold">Wind:</span> { currentDay.wind_spd } kmph</p>
                        <p><span className="bold">Precip:</span> { parseFloat(currentDay.precip.toFixed(3)) } mm</p>
                        <p><span className="bold">Pressure:</span> { currentDay.wind_spd } mb</p>
                    </div>
                </div>
                <div className="days flex row center">
                    {days.map((day, index) => {
                        return (
                            <div
                                className={selected==index?"day selected rounded flex column center":"day rounded flex column center"}
                                onClick={() => {
                                    setSelected(index);
                                    setCurrentDay(days[index]);
                                }}>
                                <p className="bold">{ index==0? "Today" : formatDate(day.datetime) }</p>
                                <img className="weather-icon" src={require("../../assets/icons/"+day.weather.icon+".png")}/>
                                <p>{day.temp} °C</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default Weather;