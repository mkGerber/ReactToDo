import React, { useState } from "react";
import InputField from "./Components/InputField";
import "./App.css";

function App() {
  const [todo, setTodo] = useState<string>("");

  return (
    <div className="App">
      <span className="heading">Taskify</span>
      <InputField />
    </div>
  );
}

export default App;
