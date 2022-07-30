import { BrowserRouter } from "react-router-dom";
import "./App.css";

//  Main routes container
import Routes from "./Routes";

const App = () => {
  return (
    <div className="app-container h-full">
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </div>
  );
};

export default App;
