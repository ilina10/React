import React from "react";
import Card from "../UI/Card";
import classes from "./TodosLists.module.css";
import Button from "../UI/Button";

const TodosLists = (props) => {
  const deleteTodoHandler = (id) => {
    props.onDeleteTodo(id);
  };
  return (
    <Card className={classes.todos}>
      <ul>
        {props.todos.map((todo) => (
          <li key={todo.id}>
            {todo.title}
            <Button
              type="submit"
              onClick={() => {
                deleteTodoHandler(todo.id);
              }}
            >
              Delete
            </Button>
          </li>
        ))}
      </ul>
    </Card>
  );
};
export default TodosLists;
