import React from "react";
import { ImCross } from "react-icons/im";
function Todo({ id, completed, title, togglecompleted, removetodo }) {
  return (
    <div className="todo">
      <div className="todo-title">
        <input
          type="checkbox"
          checked={completed}
          onChange={() => {
            togglecompleted(id);
          }}
        />
        <p className={`${completed ? "completed" : ""}`}>{title}</p>
      </div>
      <div className="cross-btn" onClick={() => removetodo(id)}>
        <ImCross />
      </div>
      {/* s<button onClick={() => removetodo(id)}>Remove</button> */}
      {/* <p>completed:{completed ? "true" : "false"}</p> */}
    </div>
  );
}

export default Todo;
