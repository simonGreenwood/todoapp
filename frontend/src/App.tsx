import Login from "./components/Login";
import Home from "./components/Home";
import { useState } from "react";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Home />
      <Navbar />
      {/*<Routes>
        <Route path="/login" element={<Login />} />
  </Routes>*/}
    </div>
  );
};

export default App;
