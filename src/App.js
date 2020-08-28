import React from "react";
import Recipes from "./Recipes";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <Recipes />
      <small>
        Open-source & coded by{" "}
        <a href="https://github.com/didiBonocore">Eugenia Bonocore</a>
      </small>
    </div>
  );
}
