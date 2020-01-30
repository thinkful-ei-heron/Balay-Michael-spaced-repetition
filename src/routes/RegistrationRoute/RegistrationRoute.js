import React, { Component } from 'react'
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm'
import Loading from '../../components/Loading/Loading';


class RegistrationRoute extends Component {
  static defaultProps = {
    history: {
      push: () => {},
    },
  }
  
  state = {
    loading: false
  }

  toggleLoading = () => {
    this.setState({
      loading: !this.state.loading
    })
  }

  handleRegistrationSuccess = () => {
    const { history } = this.props
    history.push('/login')
  }

  render() {
    if (this.state.loading) {
      return <Loading />
    } else {
      return (
        <section className="registration__container">
          <p>
            Practice learning Turkish with the spaced repetition technique.
          </p>
          <p className="description">
            Spaced repetition exploits the psychological spacing effect by showing newer and more difficult words more frequently and showing older and less difficult words less frequently.
          </p>
          <h2>Sign up</h2>
          <RegistrationForm
            onRegistrationSuccess={this.handleRegistrationSuccess}
            toggleLoading={this.toggleLoading}
          />
        </section>
      );
    }
  }
}

export default RegistrationRoute
