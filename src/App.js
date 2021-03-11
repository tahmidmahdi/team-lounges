
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import NotFound from './components/NotFound/NotFound';
import TeamDetails from './components/TeamDetails/TeamDetails';
// import SocialMediaError from './components/SocialMeadiaError/SocialMediaError';

function App() {
  return (
    <div >

      <Router>
        <Switch>
          <Route exact path="/">
            <Header></Header>
            <Home />   
          </Route>
          <Route path="/team/:idTeam">
            <TeamDetails></TeamDetails>
          </Route>
          {/* <Route path="/social">
            <SocialMediaError></SocialMediaError>
          </Route> */}
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
