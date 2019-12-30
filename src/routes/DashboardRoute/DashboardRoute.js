import React, { Component } from 'react'
import UserContext from '../../contexts/UserContext'
import Dashboard from '../../components/Dashboard/Dashboard';

class DashboardRoute extends Component {
  static contextType = UserContext

  render() {
    return (
      <section className="dashboard__container">
          <Dashboard />
      </section>
    );
  }
}

export default DashboardRoute
