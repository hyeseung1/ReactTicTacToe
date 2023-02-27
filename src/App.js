import React from "react";
function Square({value}) {
function handleClick() {
  console.log("Clicked")
}
  return (
    <button 
      className = "square"
      onClick={handleClick}>
        {value}
      </button>
  );
}

export default function Board() {
  return (
    <div>
      <div className = "board-row">
        <Square value="X"/>
        <Square value="X"/>
        <Square value="X"/>
      </div>
      <div className = "board-row">
        <Square value="X"/>
        <Square value="X"/>
        <Square value="X"/>
      </div>
      <div className = "board-row">
        <Square value="X"/>
        <Square value="X"/>
        <Square value="X"/>
      </div>
    </div>
  );
}
