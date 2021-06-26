import './App.css';
import { Switch, Route } from "react-router-dom";
import HomePage from "./pages/Homepage"
import Events from "./pages/Events"
import EventDetail from "./pages/EventDetail"
import CreateEvent from "./pages/CreateEvent"
import Navigation from "./components/Navigation";
import Login from "./pages/Login"

function App() {
  return (
    <div className="App">
    <Navigation />
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/events" component={Events} />
      <Route path="/create-event" component={CreateEvent} />
      <Route path="/login" component={Login} />
      <Route path="/events/:id" component={EventDetail} />
    </Switch>
    </div>
  );
}

export default App;
