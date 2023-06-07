import { Text, HStack, Button, ListIcon } from "@chakra-ui/react";
import { CheckIcon, CloseIcon } from "@chakra-ui/icons";
import { Todo } from "../types";
interface TodoListItemProps {
  todo: Todo;
  markAsCompleted: (id: number) => void;
}
const TodoListItem = (props: TodoListItemProps) => {
  return (
    <div>
      <HStack spacing={4}>
        <ListIcon
          as={props.todo.completed ? CheckIcon : CloseIcon}
          color="green.500"
          /* make it inline */
          display="inline"
        />
        <Text fontSize="lg">{props.todo.title}</Text>
        <Button
          onClick={() => props.markAsCompleted(props.todo.id)}
          variant="solid"
          colorScheme={props.todo.completed ? "red" : "teal"}
          size="sm"
        >
          toggle completed
        </Button>
      </HStack>
    </div>
  );
};
export default TodoListItem;
