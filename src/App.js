import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BibleView from "./containers/BibleView";
import Home from "./containers/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bible-policy" element={<BibleView />} />
      </Routes>
    </Router>
  );
}

export default App;
