import { Route, Routes } from "react-router-dom";
import Welcome from "./pages/Welcome";
import Producsts from "./pages/Producsts";
import React from "react";
import MainHeader from "./components/MainHeader";
import ProductDetail from "./pages/ProductDetail";
function App() {
  return (
    <React.Fragment>
      <MainHeader />
      <main>
        <Routes>
          <Route path="/welcome/*" element={<Welcome />} />
          <Route path="/products" exact element={<Producsts />} />
          <Route
            path="/products/:productId"
            element={<ProductDetail />}
          />
        </Routes>
      </main>
    </React.Fragment>
  );
}

export default App;
