import "./style.css";

import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();

    return (
        <div className="home-page full-height full-width flex row center">
            <button className="navigate-btn bold rounded" onClick={()=>navigate("/weather")}>Weather App</button>
            <button className="navigate-btn bold rounded" onClick={()=>navigate("/weather")}>Calculator App</button>
            <button className="navigate-btn bold rounded" onClick={()=>navigate("/weather")}>Sticky Notes App</button>
        </div>
    );
};

export default Home;