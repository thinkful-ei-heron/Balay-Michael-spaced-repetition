import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from '../Header/Header';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import PublicOnlyRoute from '../PublicOnlyRoute/PublicOnlyRoute';
import RegistrationRoute from '../../routes/RegistrationRoute/RegistrationRoute';
import LoginRoute from '../../routes/LoginRoute/LoginRoute';
import DashboardRoute from '../../routes/DashboardRoute/DashboardRoute';
import LearningRoute from '../../routes/LearningRoute/LearningRoute';
import NotFoundRoute from '../../routes/NotFoundRoute/NotFoundRoute';
import FeedbackRoute from '../../routes/FeedbackRoute/FeedbackRoute';
import './App.css';

export default class App extends Component {
  state = { hasError: false };

  static getDerivedStateFromError(error) {
    console.error(error);
    return { hasError: true };
  }

  render() {
    const { hasError } = this.state;
    return (
      <BrowserRouter>
        <div className="App">
          <Header />
          <main>
            {hasError && <p>There was an error! Oh no!</p>}
            <Switch>
              <PrivateRoute exact path={'/'} component={DashboardRoute} />
              <PrivateRoute path={'/learn'} component={LearningRoute} />
              <PrivateRoute path={'/feedback'} component={FeedbackRoute} />
              <PublicOnlyRoute
                path={'/register'}
                component={RegistrationRoute}
              />
              <PublicOnlyRoute path={'/login'} component={LoginRoute} />
              <Route component={NotFoundRoute} />
            </Switch>
          </main>
        </div>
      </BrowserRouter>
    );
  }
}
