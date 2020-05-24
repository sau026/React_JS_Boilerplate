import React, {Component, Suspense} from 'react';
import { Route } from "react-router-dom";

const Dashboard = React.lazy(() => import('./dashboard'));
const ViewProfile = React.lazy(() => import('./view-profile'));

class RouterOutlet extends Component {
    render() {
      const {match} = this.props;
      return (
        <Suspense fallback={<div>Loading...</div>}>
            <Route path={`${match.url}/dashboard`} render={props => (<Dashboard {...props} /> )}/>
            <Route path={`${match.url}/view-profile`} render={props => (<ViewProfile {...props} /> )}/>
        </Suspense> 
      );
    }
}

export default RouterOutlet;
