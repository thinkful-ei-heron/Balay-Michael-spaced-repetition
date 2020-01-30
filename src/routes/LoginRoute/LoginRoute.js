import React, { Component } from 'react'
import LoginForm from '../../components/LoginForm/LoginForm'
import Loading from '../../components/Loading/Loading';


class LoginRoute extends Component {
  static defaultProps = {
    location: {},
    history: {
      push: () => { },
    },
  }

  state = {
    loading: false
  }

  toggleLoading = () => {
    this.setState({
      loading: !this.state.toggleLoading
    })
  }

  handleLoginSuccess = () => {
    const { location, history } = this.props
    const destination = (location.state || {}).from || '/'
    history.push(destination)
  }

  render() {
    if (this.state.loading) {
      return <Loading />
    } else {
      return (
        <section className="login__container">
          <h2>Login</h2>
          <LoginForm
            onLoginSuccess={this.handleLoginSuccess}
            toggleLoading={this.toggleLoading}
          />
        </section>
      );
    }
  }
}

export default LoginRoute
