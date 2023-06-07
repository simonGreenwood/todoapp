import Login from "./components/Login";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import { Box } from "@chakra-ui/react";
const App = () => {
  return (
    <div style={{ paddingLeft: 5 }}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
};

export default App;
