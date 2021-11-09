import { Route, Switch, BrowserRouter } from "react-router-dom";
import "./App.css";

//Components
import FindCandidates from "./pages/FindCandidates";
import FindJobs from "./pages/FindJobs";
import LandingPage from "./pages/LandingPage";
import SignInCandidates from "./pages/accounts/common/signIn";
import SignUpCandidates from "./pages/accounts/candidates/signUp.candidates";
import ResetPassword from "./pages/accounts/common/resetPassword.candidates";
import SignUpRecruitors from "./pages/accounts/recruitors/signup.recruitors";

function App() {
  return (
    <div className="app-container">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/candidates" component={FindJobs} />
          <Route exact path="/employers" component={FindCandidates} />
          <Route exact path="/candidate-signup" component={SignUpCandidates} />
          <Route exact path="/recruitor-signup" component={SignUpRecruitors} />
          <Route exact path="/login" component={SignInCandidates} />
          <Route exact path="/reset-password" component={ResetPassword} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
