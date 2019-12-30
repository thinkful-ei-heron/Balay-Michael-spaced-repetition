import React, { Component } from 'react'
import Dashboard from '../../components/Dashboard/Dashboard';

class DashboardRoute extends Component {

  render() {
    return (
      <section className="dashboard__container">
          <Dashboard />
      </section>
    );
  }
}

export default DashboardRoute
