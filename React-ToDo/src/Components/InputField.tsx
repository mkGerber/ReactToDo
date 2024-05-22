import React from "react";

interface Props{
    todo: string;
    setTodo: (todo: string) => void;
}

const InputField = ({ todo, setTodo }:) => {
  return (
    <form className="input">
      <input
        type="input"
        placeholder="Enter a task"
        className="input_box"
      ></input>
      <button className="input_button" type="submit">
        Add
      </button>
    </form>
  );
};

export default InputField;
