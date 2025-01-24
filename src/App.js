import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AuthPage from "./Components/AuthPage";
import Home from "./Components/Home";
import ProductDetailsPage from "./Components/ProductDetail";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <Router>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<AuthPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/productDetails/:id" element={<ProductDetailsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
