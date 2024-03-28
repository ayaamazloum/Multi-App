import "./styles/utilities.css";
import "./styles/colors.css";
import "./styles/index.css";

import Weather from "./pages/Weather";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Calculator from "./pages/Calculator";
import StickyNotes from "./pages/StickyNotes";

const App = () => {
  return (
    <div className="app column">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/weather" element={<Weather />}></Route>
          <Route path="/calculator" element={<Calculator />}></Route>
          <Route path="/stickynotes" element={<StickyNotes />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
