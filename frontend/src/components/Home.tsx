import { Todo } from "../types";
interface HomeProps {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}
const Home = (props: HomeProps) => {
  const markAsCompleted = (id: number) => {
    const newTodos = props.todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = true;
      }
      return todo;
    });
    props.setTodos(newTodos);
  };

  return (
    <div>
      <h1>Todos</h1>
      {props.todos.map((todo) => {
        console.log(todo);
        return (
          <div>
            <h3>
              {todo.title} ({todo.completed ? "completed" : "not completed"}){" "}
              <button onClick={() => markAsCompleted(todo.id)}>
                mark as completed
              </button>
            </h3>
          </div>
        );
      })}
    </div>
  );
};
export default Home;
