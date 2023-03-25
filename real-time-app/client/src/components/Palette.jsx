import React, { useState } from 'react'
import { send } from '../socket.Api';
const Palette = () => {

  const [color, setColor] = useState("");



  return (
    <div className='box'>
      <input onChange={e => setColor(e.target.value)} type="color" />
      <button onClick={() => send(color)} className='btn'>Click</button>
      {color}
    </div>
  )
}

export default Palette