// src/App.js
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import PlayersList from "./PlayersList";

const App = () => {
  return (
    <div className="container mt-5">
      <h1 className="text-center">FIFA Player Cards</h1>
      <PlayersList />
    </div>
  );
};

export default App;
