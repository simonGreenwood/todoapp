import { UnorderedList, ListItem, ListIcon, Text } from "@chakra-ui/react";
import { MdCheckCircle } from "react-icons/md";
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
      <UnorderedList>
        {props.todos.map((todo) => (
          <ListItem>
            <ListIcon as={MdCheckCircle} color="green.500" />
            <TodoListItem todo={todo} markAsCompleted={markAsCompleted} />
          </ListItem>
        ))}
      </UnorderedList>
    </div>
  );
};
export default TodoList;
