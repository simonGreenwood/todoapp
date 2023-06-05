import Login from "./components/Login";
import Create from "./components/Create";
import Home from "./components/Home";
import { useState } from "react";
import Navbar from "./components/Navbar";
import { Todo } from "./types";

const App = () => {
  const [currentPage, setCurrentPage] = useState("login");
  const [todos, setTodos] = useState<Todo[]>([
    { id: 1, title: "hello", completed: false },
    { id: 2, title: "world", completed: true },
    { id: 3, title: "!", completed: false },
  ]);
  return (
    <div>
      <Navbar setCurrentPage={setCurrentPage} />
      {currentPage === "login" && <Login />}
      {currentPage === "create" && <Create todos={todos} setTodos={setTodos} />}
      {currentPage === "home" && <Home todos={todos} setTodos={setTodos} />}
    </div>
  );
};

export default App;
