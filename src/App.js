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
import SignIn from "./pages/auth/login";
import Logout from "./pages/auth/logout";
import UpdatePassword from "./pages/update-password/update-password";
import NewFaculityProfile from "./pages/faculity/faculity-profile/faculity-profile-new";
import PageNotFound from "./pages/404/404";
import useLocalStorage from "./hooks/useLocalStorage";
import ChairForm from "./pages/chair/chair-form/chair-form";
import Users from "./pages/users/users";
import CenterForm from "./pages/center/center-form/CenterForm";
import FacultyFilledForm from "./pages/faculity/faculty-filled-form/faculty-filled-form";
import ChairFilledForm from "./pages/chair/chair-filled-form/chair-filled-form";
import CenterFilledForm from "./pages/center/center-filled-form/center-filled-form";

const RootApp = () => {
    const [data, _] = useLocalStorage(config.storage, null);
    if (data == null) {
        return <Redirect to="/login" />;
    }
    if (data.user && !data.user.profile_filled) {
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
                    exact
                    path="/users"
                    roles={[config.roles.faculty]}
                >
                    <Navigation>
                        <Users />
                    </Navigation>
                </ProtectedRoute>
                <ProtectedRoute
                    roles={[config.roles.faculty]}
                    exact
                    path="/faculity/profiles/new"
                >
                    <NewFaculityProfile />
                </ProtectedRoute>
                <ProtectedRoute
                    roles={[config.roles.faculty, config.roles.admin]}
                    exact
                    path="/password/change"
                >
                    <Navigation>
                        <UpdatePassword />
                    </Navigation>
                </ProtectedRoute>
                <ProtectedRoute
                    roles={[config.roles.faculty]}
                    exact
                    path="/faculity/profiles/update"
                >
                    <Navigation>
                        <FaculityProfile />
                    </Navigation>
                </ProtectedRoute>
                <ProtectedRoute
                    roles={[config.roles.admin, config.roles.faculty]}
                    exact
                    path="/faculity/self-evaluation/new"
                >
                    <Navigation>
                        <FaculityForm />
                    </Navigation>
                </ProtectedRoute>
                <ProtectedRoute
                    roles={[config.roles.faculty]}
                    exact
                    path="/faculity/self-evaluation/view"
                >
                    <FacultyFilledForm />
                </ProtectedRoute>
                <ProtectedRoute
                    roles={[config.roles.chair]}
                    exact
                    path="/chair/self-evaluation/new"
                >
                    <Navigation>
                        <ChairForm />
                    </Navigation>
                </ProtectedRoute>
                <ProtectedRoute
                    roles={[config.roles.chair]}
                    exact
                    path="/chair/self-evaluation/view"
                >
                    <Navigation>
                        <ChairFilledForm />
                    </Navigation>
                </ProtectedRoute>
                <ProtectedRoute
                    roles={[config.roles.dean]}
                    exact
                    path="/center/self-evaluation/new"
                >
                    <Navigation>
                        <CenterForm />
                    </Navigation>
                </ProtectedRoute>
                <ProtectedRoute
                    roles={[config.roles.dean]}
                    exact
                    path="/center/self-evaluation/view"
                >
                    <Navigation>
                        <CenterFilledForm />
                    </Navigation>
                </ProtectedRoute>
                <Route path="/404" component={PageNotFound} />
                <Redirect from="*" to="/404" />
            </Switch>
        </Router>
    );
}

export default App;
