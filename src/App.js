import { Route, Routes } from "react-router-dom";
import Welcome from "./pages/Welcome";
import Producsts from "./pages/Producsts";
import React from "react";
import MainHeader from "./components/MainHeader";
function App() {
  return (
    <React.Fragment>
      <MainHeader />
      <main>
        <Routes>
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/products" element={<Producsts />} />
        </Routes>
      </main>
    </React.Fragment>
  );
}

export default App;
