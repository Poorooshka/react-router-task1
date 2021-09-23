import First from "./components/First";
import Second from "./components/Second";
import Third from "./components/Third";
import Links from "./components/Links";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Links />
      <Switch>
        <Route path="/poc/1">
          <First />
        </Route>
        <Route path="/poc/2">
          <Second />
          <Third />
        </Route>
        <Route path="/poc/3">
          <First />
          <Third />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
