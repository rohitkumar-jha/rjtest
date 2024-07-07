import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BibleView from "./containers/BibleView";
import Home from "./containers/Home";
import Orderzz from "./containers/Orderzz";
import EducationPlus from "./containers/EducationPlus";
import MathsPi from "./containers/MathsPi";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/educationplus-policy" element={<EducationPlus />} />
        <Route path="/bible-policy" element={<BibleView />} />
        <Route path="/orderzz-policy" element={<Orderzz />} />
        <Route path="/mathspi-policy" element={<MathsPi />} />
      </Routes>
    </Router>
  );
}

export default App;
