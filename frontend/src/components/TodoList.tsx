import { List, ListItem, ListIcon, Text } from "@chakra-ui/react";
import { CheckIcon, CloseIcon } from "@chakra-ui/icons";
import { Todo } from "../types";
import TodoListItem from "./TodoListItem";
interface TodoListProps {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}
const TodoList = (props: TodoListProps) => {
  const markAsCompleted = (id: number) => {
    const newTodos = props.todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    props.setTodos(newTodos);
  };

  return (
    <div>
      <Text fontSize="xl">Todos</Text>
      <List spacing={3}>
        {props.todos.map((todo) => (
          <ListItem>
            <TodoListItem todo={todo} markAsCompleted={markAsCompleted} />
          </ListItem>
        ))}
      </List>
    </div>
  );
};
export default TodoList;
