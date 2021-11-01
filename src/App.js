import { Route, Switch } from "react-router-dom";
import "./App.css";
import FindCandidates from "./pages/FindCandidates";
import FindJobs from "./pages/FindJobs";

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/candidates" component={FindJobs} />
        <Route exact path="/employer" component={FindCandidates} />
      </Switch>
    </>
  );
}

export default App;
