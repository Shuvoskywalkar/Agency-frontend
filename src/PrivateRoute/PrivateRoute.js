import React from 'react';
import { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { userContext } from '../App';

const PrivateRoute = ({ children, ...rest }) => {
    const[signedIN]=useContext(userContext)
    const{email}=signedIN
    return (
        <div>
            
  
    <Route
      {...rest}
      render={({ location }) =>
      email? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
  </div>
    );
};

export default PrivateRoute;