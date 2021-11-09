import { Route, Switch, BrowserRouter } from "react-router-dom";
import "./App.css";
import SignUpCandidates from "./pages/accounts/candidates/signUp.candidates";

//Components
import FindCandidates from "./pages/FindCandidates";
import FindJobs from "./pages/FindJobs";
import LandingPage from "./pages/LandingPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/candidates" component={FindJobs} />
          <Route exact path="/employers" component={FindCandidates} />
          <Route exact path="/candidate-signup" component={SignUpCandidates} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
