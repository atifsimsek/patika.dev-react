import { useEffect } from "react";
import Palette from "./components/Palette"
import { init } from "./socket.Api";


function App() {

  useEffect(() => {
    init()
  }, [])


  return (
    <div className="container">
      <Palette />
    </div>
  );
}

export default App;
