import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/home";
import Tracker from "./pages/tracker";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/tracker" element={<Tracker />} />
      </Routes>
    </Router>
  );
};

export default App;
