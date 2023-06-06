import { Todo } from "../types";
import ListItem from "./ListItem";
interface HomeProps {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}
const List = (props: HomeProps) => {
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
      {props.todos.map((todo) => (
        <ListItem todo={todo} markAsCompleted={markAsCompleted} />
      ))}
    </div>
  );
};
export default List;
