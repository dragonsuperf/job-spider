import React from "react";
import { Route, Switch } from "react-router-dom";
import { Home, Recruit, Introduce } from '../pages/index'

const RoutedContent = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/recruit" component={Recruit} />
        <Route path="/introduce" component={Introduce} />
      </Switch>
    </>
  );
};

export default RoutedContent;
