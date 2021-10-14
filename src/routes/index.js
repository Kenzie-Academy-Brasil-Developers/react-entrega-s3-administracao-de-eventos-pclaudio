import { Route, Switch } from "react-router";
import Display from "../components/Display";

const Routes = ({ context }) => {
  return (
    <Switch>
      <Route exact path="/">
        <Display context={context} />
      </Route>

      <Route path="/confraternization">
        <Display context={context} />
      </Route>

      <Route path="/graduation">
        <Display context={context} />
      </Route>

      <Route path="/wedding">
        <Display context={context} />
      </Route>
    </Switch>
  );
};

export default Routes;
