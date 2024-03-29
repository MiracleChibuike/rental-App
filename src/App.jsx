import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/HouseHold.jsx";
import Personal from "./components/PersonalInfo.jsx";
import Residence from "./components/Residence.jsx";
import Pets from "./components/Pets.jsx";
import MoveIn from "./components/MoveIn.jsx";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Personal />} /> {/* Change made here */}
        <Route path="/header" element={<Header />} />
        <Route path="/pets" element={<Pets />} />
        <Route path="/dates" element={<MoveIn />} />
        <Route path="/residence" element={<Residence />} />
        {/* Add more routes for other pages */}
      </Routes>
    </Router>
  );
};

export default App;
