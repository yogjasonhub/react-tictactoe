import React from 'react';

// Here we are creating a component/reusable code
// used to render, manage, and update the UI elements
export default function Square() {
  return (
    <React.Fragment>
      <div className="board-row-1">
        <button className="square">X</button>
        <button className="square">X</button>
        <button className="square">X</button>
      </div>
      <div className="board-row-1">
        <button className="square">X</button>
        <button className="square">X</button>
        <button className="square">X</button>
      </div>
      <div className="board-row-1">
        <button className="square">X</button>
        <button className="square">X</button>
        <button className="square">X</button>
      </div>
    </React.Fragment>
  );
}
