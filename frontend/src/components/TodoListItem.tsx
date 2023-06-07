import { Text, HStack, Button, Tag } from "@chakra-ui/react";
import { Todo } from "../types";
interface TodoListItemProps {
  todo: Todo;
  markAsCompleted: (id: number) => void;
}
const TodoListItem = (props: TodoListItemProps) => {
  return (
    <div>
      <HStack spacing={4}>
        <Text fontSize="lg">{props.todo.title}</Text>
        {/*props.todo.completed ? (
          <Tag variant="solid" size="md" colorScheme="teal">
            completed
          </Tag>
        ) : (
          <Tag variant="solid" size="md" colorScheme="red">
            uncompleted
          </Tag>
        )*/}
        <Button
          onClick={() => props.markAsCompleted(props.todo.id)}
          variant="solid"
          colorScheme={props.todo.completed ? "red" : "teal"}
          size="sm"
        >
          {props.todo.completed ? "mark as not completed" : "mark as completed"}
        </Button>
      </HStack>
    </div>
  );
};
export default TodoListItem;
