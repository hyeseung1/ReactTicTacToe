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
  const [squares, setSquares] = useState(Array(9).fill(null));
  function handleClick(i) {
    const futureSquares = squares.slice();
    futureSquares[i] = "X";
    setSquares(futureSquares);
  }
  return (
    <div>
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
}
