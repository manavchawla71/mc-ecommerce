import React from "react";
import "./App.css";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ProductListing from "./pages/ProductListing";

function App() {
  return (
    <div className="App">
      <Router>
        <div className="desktop-navbar">
          <Navbar />
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<ProductListing />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
