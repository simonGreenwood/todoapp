import { Todo } from "../types";
import { FormEvent, useState } from "react";
interface CreateProps {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}
const Create = (props: CreateProps) => {
  const [title, setTitle] = useState("");
  const [completed, setCompleted] = useState(false);

  const createTodo = (event: FormEvent) => {
    event.preventDefault();
    console.log("create todo");
    console.log(title, completed);
    props.setTodos([
      ...props.todos,
      {
        id: Math.max(...props.todos.map((todo) => todo.id)) + 1,
        title,
        completed,
      },
    ]);
  };

  return (
    <div>
      <h1>Create</h1>
      <form onSubmit={(e) => createTodo(e)}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="checkbox"
          checked={completed}
          onChange={(e) => setCompleted(e.target.checked)}
        />
        <button formAction="submit">create</button>
      </form>
    </div>
  );
};
export default Create;
