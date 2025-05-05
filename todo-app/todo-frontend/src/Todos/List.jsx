import React from "react";
import Todo from "./Todo/Todo";

const TodoList = ({ todos, deleteTodo, completeTodo }) => {
  const onClickDelete = (todo) => () => {
    deleteTodo(todo);
  };

  const onClickComplete = (todo) => () => {
    console.log("complete");
    completeTodo(todo);
  };

  return (
    <>
      {todos
        .map((todo) => (
          <Todo
            key={todo.text}
            todo={todo}
            handleClickComplete={onClickComplete(todo)}
            handleClickDelete={onClickDelete(todo)}
          />
        ))
        .reduce((acc, cur) => [...acc, <hr />, cur], [])}
    </>
  );
};

export default TodoList;
