import "./style.css";

const Weather = () => {
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