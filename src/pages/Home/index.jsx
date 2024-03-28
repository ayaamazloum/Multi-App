import "./style.css";

import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();

    return (
        <div className="home-page full-height full-width flex row center">
            <button className="navigate-btn bold rounded" onClick={()=>navigate("/weather")}>Weather App</button>
            <button className="navigate-btn bold rounded" onClick={()=>navigate("/calculator")}>Calculator App</button>
            <button className="navigate-btn bold rounded" onClick={()=>navigate("/stickynotes")}>Sticky Notes App</button>
        </div>
    );
};

export default Home;