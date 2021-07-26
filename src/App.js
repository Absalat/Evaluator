import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Navigation from './components/naviagation/navigation'
import FaculityForm from './pages/faculity/faculity-form/faculity-form'
import FilledFaculityList from './pages/faculity/filled-faculity-list/filled-faculity-list'
function App() {
  return (
    <Router>
      <Navigation>
        <Switch>
          <Route exact path="/faculity/faculity-form/create">
            <FaculityForm />
          </Route>
          <Route exact path="/faculity/filled-faculity-list">
            <FilledFaculityList/>
          </Route>
        </Switch>
      </Navigation>
    </Router>
    );
}

export default App;
