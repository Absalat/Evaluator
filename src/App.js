import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  useHistory,
} from "react-router-dom";
import Navigation from "./components/naviagation/navigation";
import ProtectedRoute from "./components/protected-route/protected-route";
import config from "./config";
import FaculityForm from "./pages/faculity/faculity-form/faculity-form";
import FaculityProfile from "./pages/faculity/faculity-profile/faculity-profile";
import FilledFaculityList from "./pages/faculity/filled-faculity-list/filled-faculity-list";
import SignIn from "./pages/auth/login";
import Logout from "./pages/auth/logout";
import UpdatePassword from "./pages/update-password/update-password";
import NewFaculityProfile from "./pages/faculity/faculity-profile/faculity-profile-new";
import PageNotFound from "./pages/404/404";
import useLocalStorage from "./hooks/useLocalStorage";

const RootApp = () => {
  const [data,_] = useLocalStorage(config.storage,null)
  if (data == null) {
    return <Redirect to="/login" />;
  }
  if (!data.user.profile_filled) {
    return <Redirect to="/faculity/profiles/new" />;
  }
  return <Redirect to="/faculity/self-evaluation/new" />;
};

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <RootApp />
        </Route>
        <Route exact path="/login" component={SignIn} />
        <Route exact path="/logout" component={Logout} />

        <ProtectedRoute
          role={[config.roles.faculty]}
          exact
          path="/faculity/profiles/new"
        >
          <NewFaculityProfile />
        </ProtectedRoute>
        <ProtectedRoute
          role={[config.roles.faculty, config.roles.admin]}
          exact
          path="/password/change"
        >
          <Navigation>
            <UpdatePassword />
          </Navigation>
        </ProtectedRoute>
        <ProtectedRoute
          role={[config.roles.faculty]}
          exact
          path="/faculity/profiles/update"
        >
          <Navigation>
            <FaculityProfile />
          </Navigation>
        </ProtectedRoute>
        <ProtectedRoute
          role={[config.roles.admin, config.roles.faculty]}
          exact
          path="/faculity/self-evaluation/new"
        >
          <Navigation>
            <FaculityForm />
          </Navigation>
        </ProtectedRoute>
        <ProtectedRoute
          role={[config.roles.admin]}
          exact
          path="/faculity/self-evaluation/list"
        >
          <Navigation>
            <FilledFaculityList />
          </Navigation>
        </ProtectedRoute>
        <Route path="/404" component={PageNotFound} />
        <Redirect from="*" to="/404" />
      </Switch>
    </Router>
  );
}

export default App;
