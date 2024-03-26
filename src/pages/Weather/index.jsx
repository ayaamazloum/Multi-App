import "./style.css";

import { useEffect, useState } from "react";

const Weather = () => {
    const [weather, setweather] = useState([]);

    const [city, setCity] = useState();
    const [countryCode, setCountryCode] = useState();

    useEffect(() => {

        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const formData = new FormData();
                    formData.append('latitude', position.coords.latitude);
                    formData.append('longitude', position.coords.longitude);
                    formData.append('key', 'd3ad8e2bd18d4eadbfe401334be35952');
                    formData.append('days', 4);
                    
                    fetch(`https://api.weatherbit.io/v2.0/forecast/daily?key=d3ad8e2bd18d4eadbfe401334be35952&lat=${position.coords.latitude}&lon=${position.coords.longitude}&days=4`)
                    .then(response => response.json())
                    .then(data => {
                        console.log(data);
                        setCity(data.city);
                        setCountryCode(data.countryCode);
                    })
                    .catch(error => console.error('Error fetching location:', error));
                },
                (error) => {
                    console.error('Error getting location:', error);
                }
            );
        } else {
            console.error('Geolocation is not supported by this browser.');
        }
  }, []);


    return (
        <div className="weather-page full-height full-width flex center">
            <div className="weather-box rounded flex column center">
                <p>Baalbek</p>
                <p>date</p>
                <div className="day-details flex row center">
                    <div className="flex column center">
                        <p>icon</p>
                        <p>weather desc</p>
                    </div>
                    <p>temp</p>
                    <div className="flex column">
                        <p>details</p>
                        <p>details</p>
                        <p>details</p>
                    </div>
                </div>
            <div className="days flex row center">
                    <div className="day flex column center">
                        <p>day</p>
                        <p>icon</p>
                        <p>temperature</p>
                    </div>
                    <div className="day flex column center">
                        <p>day</p>
                        <p>icon</p>
                        <p>temperature</p>
                    </div>
                    <div className="day flex column center">
                        <p>day</p>
                        <p>icon</p>
                        <p>temperature</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Weather;