import './App.css';
import { Switch, Route } from "react-router-dom";
import HomePage from "./pages/Homepage"
import Events from "./pages/Events"
import EventDetail from "./pages/EventDetail"
import CreateEvent from "./pages/CreateEvent"
import Navigation from "./components/Navigation";
import Login from "./pages/Login"
import SignUp from "./pages/SignUp"
import EnterScores from "./pages/EnterScores"

function App() {
  return (
    <div className="App">
    <Navigation />
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/events" component={Events} />
      <Route path="/create-event" component={CreateEvent} />
      <Route path="/login" component={Login} />
      <Route path="/event/:id" component={EventDetail} />
      <Route path="/signup" component={SignUp} />
      <Route path="/enter-scores" component={EnterScores} />
    </Switch>
    </div>
  );
}

export default App;
