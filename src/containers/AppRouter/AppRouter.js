import * as React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../../components/Home";
import Header from "../../components/Header";

class AppRouter extends React.Component {
  render() {
    return (
      <div>
        <div className="header">
          <Header />
        </div>
        <div className="content">
          <Switch>
            <Route path="/" sensitive={true} exact={true} strict={true} component={Home} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default AppRouter;
