import React, { useState } from "react";
import "./App.css";
import { Game } from "./TicTacToe";

const game = new Game();

const App: React.FC = () => {
  const [, updateState] = React.useState();
  const forceUpdate = React.useCallback(() => updateState({}), []);

  function resetGame() {
    game.field = ["", "", "", "", "", "", "", "", ""];
    game.activePlayer = "X";
    game.winner = "";
    forceUpdate();
  }

  function cellButton(i: number) {
    return (
      <button
        disabled={game.gameResult() !== ""}
        onClick={() => {
          game.makeMove(i);
          forceUpdate();
        }}
      >
        {game.field[i]}
      </button>
    );
  }

  return (
    <div className="App">
      <div>
        <h1>Tic Tac Toe</h1>
        <h2>Current turn &#8658; {game.getPlayerTurn()}</h2>
        <table>
          <tbody>
            <tr>
              <td>{cellButton(0)}</td>
              <td>{cellButton(1)}</td>
              <td>{cellButton(2)}</td>
            </tr>
            <tr>
              <td>{cellButton(3)}</td>
              <td>{cellButton(4)}</td>
              <td>{cellButton(5)}</td>
            </tr>
            <tr>
              <td>{cellButton(6)}</td>
              <td>{cellButton(7)}</td>
              <td>{cellButton(8)}</td>
            </tr>
          </tbody>
        </table>
        <h2>{game.gameResult()}</h2>
        <button
          className="resetButton"
          disabled={game.gameResult() === ""}
          onClick={resetGame}
        >
          Restart Game
        </button>
      </div>
    </div>
  );
};

export default App;
