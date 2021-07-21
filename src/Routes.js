import { Switch, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Passenger from "./Pages/Passenger";
import Post from "./Pages/Post";
import MainNavBar from "./components/MainNavBar";

function Routes() {
  return (
    <Switch>
      <Route path="/" exact>
        <MainNavBar />
        <Home />
      </Route>
      <Route path="/posts" exact>
        <MainNavBar />
        <Post />
      </Route>
      <Route path="/passengers" exact>
        <MainNavBar />
        <Passenger />
      </Route>
    </Switch>
  );
}

export default Routes;
