import React from 'react';
import { useState } from 'react';

// Here we are creating a component/reusable code
// used to render, manage, and update the UI elements
export default function Board() {
  return (
    <React.Fragment>
      <div className="board-row">
        <Square value="1"/>
        <Square value="2"/>
        <Square value="3"/>
      </div>
      <div className="board-row">
        <Square value="4"/>
        <Square value="5"/>
        <Square value="6"/>
      </div>
      <div className="board-row">
        <Square value="7"/>
        <Square value="8"/>
        <Square value="9"/>  
      </div>
    </React.Fragment>
  );

  function Square() {
    const [value, setValue] = useState(null);

    function handleClick() {
      setValue('X');
    }

    return (
    <button className="square"
      onClick={handleClick}
    >
      {value}</button>
    );
    }

}
