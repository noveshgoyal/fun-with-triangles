import "./App.css";
import { BrowserRouter, NavLink, Routes, Route } from "react-router-dom";
import IsTriangle from "./components/isTriangle";
import Quiz from "./components/quiz";
import Hypotenuse from "./components/hypotenuse";
import Area from "./components/area";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="App">
          <nav id="navigation">
                <NavLink to="/" end className="link">Is Triangle?</NavLink>
                <NavLink to="/quiz" className="link">Quiz</NavLink>
                <NavLink to="/hypotenuse" className="link">Hypotenuse</NavLink>
                <NavLink to="/area" className="link">Area</NavLink>
          </nav>

          <Routes>
            <Route exact path="/" element={<IsTriangle />} />
            <Route exact path="/quiz" element={<Quiz />} />
            <Route exact path="/hypotenuse" element={<Hypotenuse />} />
            <Route exact path="/area" element={<Area />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
