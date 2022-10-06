import { Route, Routes } from "react-router-dom";
import Welcome from "./pages/Welcome";
import Producsts from "./pages/Producsts";
import React from "react";
function App() {
  return (
    <React.Fragment>
      <Routes>
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/products" element={<Producsts />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
