import ".//Comp/css/App.css";
import NavBar from "./Comp/JS/NavBar";
import Contact from "./Comp/JS/Contact";
import About from "./Comp/JS/About";
import Recipe from "./Comp/JS/Recipe";
import Welcome from "./Comp/JS/Welcome";
import NotFound from "./Comp/JS/NotFound";
import Food from "./Comp/JS/Food";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";

function App() {
  const [firstTime, setFirstTime] = useState(true);
  const changeNav = () => {
    setFirstTime(!firstTime);
  };

  return (
    <>
      <Router>
        <NavBar firstTime={firstTime} />
        <div className="App">
          <Routes>
            <Route path="/" element={<Welcome setFirstTime={setFirstTime} />} />
            <Route path="/recipe" element={<Recipe />} />
            <Route path="/food" element={<Food />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
