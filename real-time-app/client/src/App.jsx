import { useEffect, useState } from "react";
import Palette from "./components/Palette"
import { init, subscribe } from "./socket.Api";

function App() {

  /*Color statetini dersten farklı olarak buraya aldım çünkü kullanıcı
  inputa tıkladığında input rengi sabit kalıyordu şimdi input rengi aktif olarak değişebiliyor.
  Ek olarak sadece tek state kullanılabilir ancak o zaman ekran rengi ile input rengi birlikte değişiyor,
  o yüzden o yolu tercih etmedim*/
  
  const [activeColor, setActiveColor] = useState("#282c34")
  const [color, setColor] = useState("#282c34");

  useEffect(() => {
    init()
    subscribe((color) => {
      setActiveColor(color)
      setColor(color)
    })
  }, [])


  return (
    <div style={{ backgroundColor: activeColor }} className="container">
      <h1>{color}</h1>
      <Palette color={color} setColor={setColor} />
    </div>
  );
}

export default App;
