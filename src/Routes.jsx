import { Route, Switch } from "react-router-dom";

//Components
import FindCandidates from "./pages/FindCandidates";
import FindJobs from "./pages/FindJobs";
import LandingPage from "./pages/LandingPage";
import SignInCandidates from "./pages/accounts/common/signIn";
import SignUpCandidates from "./pages/accounts/candidates/signUp.candidates";
import ResetPassword from "./pages/accounts/common/resetPassword";
import SignUpRecruitors from "./pages/accounts/recruitors/signup.recruitors";
import CandidateProfile from "./pages/accounts/candidates/CandidateProfile";
import ReviewResume from "./pages/accounts/candidates/ReviewResume";
import CandidatesDashboard from "./pages/accounts/candidates/dashboard/Dashboard";
import DashboardJobDetails from "./pages/accounts/candidates/dashboard/components/jobDetails.dashboard";
import JobApplications from "./pages/accounts/candidates/dashboard/components/jobApplications";

const Routes = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/candidates" component={FindJobs} />
        <Route exact path="/employers" component={FindCandidates} />
        <Route exact path="/candidate-signup" component={SignUpCandidates} />
        <Route exact path="/recruitor-signup" component={SignUpRecruitors} />
        <Route exact path="/login" component={SignInCandidates} />
        <Route exact path="/reset-password" component={ResetPassword} />
        <Route exact path="/profile-candidate" component={CandidateProfile} />
        <Route exact path="/candidate-resume-review" component={ReviewResume} />
        <Route
          exact
          path="/candidate-dashboard"
          component={CandidatesDashboard}
        />
        <Route
          exact
          path="/candidate-dashboard/:id"
          component={DashboardJobDetails}
        />
        <Route
          exact
          path="/candidate-applications"
          component={JobApplications}
        />
      </Switch>
    </>
  );
};

export default Routes;
