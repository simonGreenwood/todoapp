import { Todo } from "../types";
interface CreateProps {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}
const Create = (props: CreateProps) => {
  const createTodo = () => {
    console.log("create todo");
    props.setTodos([
      ...props.todos,
      { id: 4, title: "hello", completed: false },
    ]);
  };

  return (
    <div>
      <h1>Create</h1>

      <button onClick={() => createTodo()}>create</button>
    </div>
  );
};
export default Create;
