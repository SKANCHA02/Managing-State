import React from "react";
import "./App.css";
import { useState } from "react";
import TaskList from "./components/TaskList";
import AddItem from "./components/AddItem";

function App() {
  const [List, setList] = useState(["react", "redux "]);
  const addItem = (item) => {
    setList([item, ...List]);
  };
  const deleteItem = (indice) => {
    setList(List.filter((el, i) => i !== indice));
  };
  return (
    <div className="App">
      <h1>TO DO List</h1>
      <AddItem addItem={addItem} />
      <TaskList deleteItem={deleteItem} list={List} />
    </div>
  );
}

export default App;
