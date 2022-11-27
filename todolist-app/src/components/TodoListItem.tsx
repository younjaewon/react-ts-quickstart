import React from "react";
import { TodoListItemType } from "../AppContainer";

type TodoListItemProps = {
  todoItem: TodoListItemType;
  toggleDone: (no: number) => void;
  deleteTodo: (no: number) => void;
};

const TodoListItem = ({ todoItem, toggleDone, deleteTodo }: TodoListItemProps) => {
  let itemClassName = "list-group-item";
  if (todoItem.done) {
    itemClassName += " list-group-item-success";
  }

  console.log("TodoListItem");

  return (
    <div className={itemClassName}>
      <span className={todoItem.done ? "todo-done pointer" : "pointer"} onClick={() => toggleDone(todoItem.no)}>
        {todoItem.todo}
        {todoItem.done ? " (완료)" : ""}
      </span>
      <span className="float-end badge bg-secondary pointer" onClick={() => deleteTodo(todoItem.no)}>
        삭제
      </span>
    </div>
  );
};

export default TodoListItem;
