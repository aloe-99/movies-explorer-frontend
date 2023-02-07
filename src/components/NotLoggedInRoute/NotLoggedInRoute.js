import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const NotLoggedInRoute = ({ component: Component, ...props }) => {
  return (
    <Route>
      {() =>
        props.loggedIn ? <Redirect to="./movies" /> : <Component {...props} />
      }
    </Route>
  );
};

export default NotLoggedInRoute;