import React from "react";
import { useState } from 'react';
function Square({value, onSquareClick}) {
  return (
      <button className="square" onClick={onSquareClick}>
        {value}
      </button>
  );
}

export default function Board() {
  const [xIsNext, setXIsNext] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null));
  function handleClick(i) {
    if (squares[i] || calculateWinner(squares)) {
      return;
    }
    const futureSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    setSquares(futureSquares);
    setXIsNext(!xIsNext);
  }
  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }
  return (
    <div>
      <div className="status">{status}</div>
      <div className = "board-row">
        <Square value={squares[0]} onSquareClick={() => handleCllick}/>
        <Square value={squares[1]} onSquareClick={() => handleCllick}/>
        <Square value={squares[2]} onSquareClick={() => handleCllick}/>
      </div>
      <div className = "board-row">
        <Square value={squares[3]} onSquareClick={() => handleCllick}/>
        <Square value={squares[4]} onSquareClick={() => handleCllick}/>
        <Square value={squares[5]} onSquareClick={() => handleCllick}/>
      </div>
      <div className = "board-row">
        <Square value={squares[6]} onSquareClick={() => handleCllick}/>
        <Square value={squares[7]} onSquareClick={() => handleCllick}/>
        <Square value={squares[8]} onSquareClick={() => handleCllick}/>
      </div>
    </div>
  );
  function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }
}
