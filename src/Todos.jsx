import React from "react";
import Todo from "./Todo";
function Todos({ todos, togglecompleted, removetodo }) {
  return (
    <div>
      {todos.map((todo) => (
        <Todo
          {...todo}
          key={todo.id}
          togglecompleted={togglecompleted}
          removetodo={removetodo}
        />
      ))}
    </div>
  );
}

export default Todos;
