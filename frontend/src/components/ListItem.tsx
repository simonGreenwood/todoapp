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
        <button onClick={() => props.markAsCompleted(props.todo.id)}>
          mark as completed
        </button>
      </h3>
    </div>
  );
};
export default ListItem;
