import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import DashboardPage from './pages/DashboardPage';
import UsersPage from './pages/UsersPage';

const App = (): JSX.Element => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={DashboardPage} />
        <Route exact path="/users" component={UsersPage} />
        <Redirect to="/" />
      </Switch>
    </Router>
  );
};

export default App;
