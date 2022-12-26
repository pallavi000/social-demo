import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Product from "./pages/product/Product";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/product" element={<Product />} />
      </Routes>
    </Router>
  );
}

export default App;
