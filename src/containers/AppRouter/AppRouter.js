import * as React from "react";
import { Switch, Route } from "react-router-dom";

class AppRouter extends React.Component {
  render() {
    return (
      <div>
        <div className="header">
          <div>header</div>
        </div>
        <div className="content">
          <Switch>
            <Route
              path="/detail"
              sensitive={true}
              exact={true}
              strict={true}
              component={() => <div>detail</div>}
            />
            <Route
              path="/"
              sensitive={true}
              exact={true}
              strict={true}
              component={() => <div>home</div>}
            />
          </Switch>
        </div>
      </div>
    );
  }
}

export default AppRouter;
