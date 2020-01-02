import React, { Component } from 'react'
import UserContext from '../../contexts/UserContext';
import Learning from '../../components/Learning/Learning';

class LearningRoute extends Component {
  static contextType = UserContext

  static defaultProps = {
    history: {
      push: () => {},
    },
  }

  handleGuessSubmit = () => {
    const { history } = this.props
    history.push('/feedback')
  }

  render() {
    return (
      <section className="learning__container">
        <Learning handleGuessSubmit={this.handleGuessSubmit} logout={this.context.processLogout} />
      </section>
    );
  }
}

export default LearningRoute
