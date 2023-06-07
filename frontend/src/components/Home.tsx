import Create from "./Create";
import TodoList from "./TodoList";
import { useState } from "react";
import { Todo } from "../types";
import { Text } from "@chakra-ui/react";
const Home = () => {
  const [todos, setTodos] = useState<Todo[]>([
    { id: 1, title: "hello", completed: false },
    { id: 2, title: "world", completed: true },
    { id: 3, title: "!", completed: false },
  ]);

  return (
    <div>
      <Text fontSize="2xl">Home</Text>
      <TodoList todos={todos} setTodos={setTodos} />
      {/* horizontal line */}
      <hr />
      <Create todos={todos} setTodos={setTodos} />
    </div>
  );
};
export default Home;
