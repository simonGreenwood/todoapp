import { Box, Button } from "@chakra-ui/react";
import { Todo } from "../types";
interface ListItemProps {
  todo: Todo;
  markAsCompleted: (id: number) => void;
}
const ListItem = (props: ListItemProps) => {
  return (
    <div>
      <h3>
        {props.todo.title}
        {props.todo.completed ? "completed" : "not completed"}
        <Button
          onClick={() => props.markAsCompleted(props.todo.id)}
          bg="tomato"
        >
          mark as completed
        </Button>
      </h3>
    </div>
  );
};
export default ListItem;
