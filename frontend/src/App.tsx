import Login from "./components/Login";
import Create from "./components/Create";
import Home from "./components/Home";
import { useState } from "react";
import Navbar from "./components/Navbar";
const App = () => {
  const [currentPage, setCurrentPage] = useState("login");

  return (
    <div>
      <Navbar setCurrentPage={setCurrentPage} />
      {currentPage === "login" && <Login />}
      {currentPage === "create" && <Create />}
      {currentPage === "home" && <Home />}
    </div>
  );
};

export default App;
