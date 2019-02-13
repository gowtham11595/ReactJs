import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import ContactCard from "./component/ContactCard";

import Joke from "./component/Joke";
import ToDo from "./component/ToDo";
import TodImport from "./component/TodImport";
const rootElement = document.getElementById("root");

function App() {
  const todItems = TodImport.map(item => <ToDo item={item} />);
  return (
    <div>
      {" "}
      <h1>My To-Do List</h1>
      {todItems}{" "}
    </div>
  );
}

ReactDOM.render(<App />, rootElement);
