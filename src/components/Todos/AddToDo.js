import React, { useState } from "react";
import Card from "../UI/Card";
import classes from "./AddToDo.module.css";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

const AddToDo = (props) => {
  const [enteredTodo, setEnteredTodo] = useState("");

  const [error, setError] = useState();

  const addTodoHandler = (event) => {
    event.preventDefault();

    if (enteredTodo.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid activity",
      });
      return;
    }
    props.onAddTodo(enteredTodo);
    setEnteredTodo("");
  };

  const todoChangedHandler = (event) => {
    setEnteredTodo(event.target.value);
  };

  const errorHandler = () => {
    setError(null);
  };
  return (
    <div>
      {error && (
        <ErrorModal
          errorTitle={error.title}
          errorMessage={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addTodoHandler}>
          <label htmlFor="todo">Add to do</label>
          <input
            id="todo"
            type="text"
            value={enteredTodo}
            onChange={todoChangedHandler}
          />
          <Button type="submit">Add to do</Button>
        </form>
      </Card>
    </div>
  );
};
export default AddToDo;
