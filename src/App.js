import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ToDoList from "./Components/ToDoList";

function App() {
  return (
    <div className="App">
      <ToDoList className="ToDoList" />
    </div>
  );
}

export default App;
