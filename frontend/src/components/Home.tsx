import Create from "./Create";
import List from "./List";
import { useState } from "react";
import { Todo } from "../types";
const Home = () => {
  const [todos, setTodos] = useState<Todo[]>([
    { id: 1, title: "hello", completed: false },
    { id: 2, title: "world", completed: true },
    { id: 3, title: "!", completed: false },
  ]);

  return (
    <div>
      <h1>Home</h1>
      <Create todos={todos} setTodos={setTodos} />
      <List todos={todos} setTodos={setTodos} />
    </div>
  );
};
export default Home;
