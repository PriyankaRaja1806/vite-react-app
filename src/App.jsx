import React from "react";
import { BoardProvider } from "./context/BoardContext";
import Board from "./components/Board";
import "./App.css";

export default function App() {
  return (
    <BoardProvider>
      <div className="app-header">
        <img src="./logoo.png" alt="Logo" className="app-logo" />
        <h1 className="app-title">Trello</h1>
      </div>
      <Board />
    </BoardProvider>
  );
}