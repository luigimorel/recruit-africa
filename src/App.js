import { Route, Switch } from "react-router-dom";
import "./App.css";

//Components
import FindCandidates from "./pages/FindCandidates";
import FindJobs from "./pages/FindJobs";
import LandingPage from "./pages/LandingPage";

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/candidates" component={FindJobs} />
        <Route exact path="/employers" component={FindCandidates} />
      </Switch>
    </>
  );
}

export default App;
