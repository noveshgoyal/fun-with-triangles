import "./App.css";
import { BrowserRouter, NavLink, Routes, Route } from "react-router-dom";
import IsTriangle from "./components/isTriangle";
import Quiz from "./components/quiz";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="App">
          <ul>
            <li>
              <NavLink to="/">isTriangle</NavLink>
            </li>
            <li>
              <NavLink to="/quiz">quiz</NavLink>
            </li>
          </ul>

          <Routes>
            <Route exact path="/" element={<IsTriangle />} />
            <Route exact path="/quiz" element={<Quiz />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
