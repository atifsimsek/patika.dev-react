import "./Css/reset.css"
import "./Css/app.scss"
import ActiveDay from "./Components/ActiveDay";
import Week from "./Components/Week"
import Inputs from "./Components/Inputs";


function App() {
  return (
    <>
      <div className="container">
        <Inputs />
        <div className="box">
          <ActiveDay />
          <Week />
        </div>
      </div>
    </>
  );
}

export default App;
