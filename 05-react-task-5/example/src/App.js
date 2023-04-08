import React from 'react'
import { Button } from 'gradientui'
import 'gradientui/dist/index.css'

const App = () => {
  return (
    <div className="container">
    <Button text={"Button"} type={"primary"} />
    <Button text={"Button"} type={"default"} />
    <Button text={"Button"} type={"text"} />
    <Button text={"Button"} type={"link"} />
  </div>
    )
}

export default App
