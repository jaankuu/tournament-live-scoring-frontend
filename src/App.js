import './App.css';
import { Switch, Route } from "react-router-dom";
import HomePage from "./pages/Homepage"
import Events from "./pages/Events"

function App() {
  return (
    <div className="App">
    
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/events" component={Events} />
    </Switch>
    </div>
  );
}

export default App;
