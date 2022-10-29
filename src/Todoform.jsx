import React from "react";
import { useState } from "react";
import { v4 as uuid } from "uuid";
import { toast } from "react-toastify";
function Todoform({ addTodo }) {
  const [title, setTitle] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    if (title.trim().length === 0) {
      //   alert("please fill input");
      toast.error("Please Fill Input", {
        autoClose: 2000,
      });
      return;
    }
    // addtodo(title);
    const newTodo = {
      title: title,
      completed: false,
      id: uuid(),
    };
    addTodo(newTodo);
    setTitle("");
  }
  return (
    <form onSubmit={handleSubmit} className="todoform">
      <input
        className="todoforminput"
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button type="Submit" className="todoform_button">
        Add
      </button>
    </form>
  );
}

export default Todoform;
