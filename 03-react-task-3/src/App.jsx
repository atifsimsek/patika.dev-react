import "./Css/reset.css";
import "./Css/app.scss";
import ActiveDay from "./Components/ActiveDay";
import Week from "./Components/Week";
import Inputs from "./Components/Inputs";
import WeatherProvider from "./context/WeatherContext";

function App() {
  return (
    <WeatherProvider>
      <div className="container">
        <Inputs />
        <div className="box">
          <ActiveDay />
          <Week />
        </div>
      </div>
    </WeatherProvider>
  );
}

export default App;
