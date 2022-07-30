import "./App.css";

import React from "react";
import { BrowserRouter } from "react-router-dom";

//  Main routes container
import AppRoutes from "./Routes";

const App = () => {
  return (
    <div className="app-container h-full">
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </div>
  );
};

export default App;
