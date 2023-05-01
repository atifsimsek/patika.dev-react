import React, { useState } from "react";
import { send } from "../socket.Api";
const Palette = ({ color, setColor }) => {
  return (
    <div className="box">
      <input
        value={color}
        onChange={(e) => setColor(e.target.value)}
        type="color"
      />
      <button onClick={() => send(color)} className="btn">
        Click
      </button>
    </div>
  );
};

export default Palette;
