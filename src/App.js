import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Customer from './Customer/Customer/Customer';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation
} from "react-router-dom";
import Admin from './Admin/Admin/Admin';
import Login from './Login/Login';
import Home from './Home/Home'
import { useContext } from 'react';
import { createContext } from 'react';
import { useState } from 'react';

import PrivateRoute from './PrivateRoute/PrivateRoute';
import Child from './Child/Child';
import CustomDetails from './Customer/CustomDetails/CustomDetails';
import Users from './Admin/AdminInfo/Users';
import Addadmin from './Admin/AdminInfo/Addadmin';
import ServiceAdded from './Admin/AdminInfo/ServiceAdded';
export const userContext=createContext()
function App() {
  const[signedIN,setSignedIN]=useState([])
  console.log(signedIN)
  
  return (
    <userContext.Provider value={[signedIN,setSignedIN]}>
    <Router>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="/Home">
          <Home/>
        </Route>
        <Route path="/CustomerPanel">
          <Customer/>
        </Route>
        <Route path="/AdminPanel">
          <Admin/>
        </Route>
        <Route path="/login">
          <Login/>
        </Route>
        <PrivateRoute path="/Child/:key">
        <Child/>
          </PrivateRoute>
          
      </Switch>
    </Router>
    </userContext.Provider>
  );
}

export default App;
