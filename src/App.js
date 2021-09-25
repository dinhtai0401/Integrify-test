import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./components/HomePage";
import Users from "./components/Users";

function App() {
  return (
    <div>
      <Switch>
        <Route path="/" exact render={(props) => <HomePage {...props} />} />
        <Route
          path="/users/:id"
          exact
          render={(props) => <Users {...props} />}
        />
      </Switch>
    </div>
  );
}

export default App;
