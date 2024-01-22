import React, { useState } from "react";
import "./App.css";
import AddToDo from "./components/Todos/AddToDo";
import TodosLists from "./components/Todos/TodosLists";

function App() {
  const [todosList, setTodosList] = useState([]);

  const addTodosHandler = (todoTitle) => {
    setTodosList((prevState) => {
      return [...prevState, { title: todoTitle, id: Math.random().toString() }];
    });
  };
  const deleteTodosHandler = (id) => {
    const updatedTodos = todosList.filter((todo) => todo.id !== id);
    setTodosList(updatedTodos);
  };
  return (
    <div>
      <AddToDo onAddTodo={addTodosHandler} />
      <TodosLists todos={todosList} onDeleteTodo={deleteTodosHandler} />
    </div>
  );
}

export default App;
