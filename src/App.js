import './App.css';
import { Switch, Route } from "react-router-dom";
import HomePage from "./pages/Homepage"
import Events from "./pages/Events"
import EventDetail from "./pages/EventDetail"

function App() {
  return (
    <div className="App">
    
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/events" component={Events} />
      <Route path="/events/:id" component={EventDetail} />
    </Switch>
    </div>
  );
}

export default App;
