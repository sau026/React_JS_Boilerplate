import React from "react";
import { Route } from "react-router-dom";
import Landing from './pages/landing/index';
import Account from './pages/account/index';
import Login from './pages/login/index';
import Register from './pages/register/index';

export default function Router_outlet() {
    return (
        <React.Fragment>
        <Route exact path="/" component={Landing}></Route>
        <Route path="/account" component={Account}></Route>
        <Route path="/login" component={Login}></Route>
        <Route path="/register" component={Register}></Route>
        </React.Fragment>
    );
  }
