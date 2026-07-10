import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "../Home";
import Popup from "./Popup";
import Navbar from "./Navbar";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Popup />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  );
};

export default Routing;