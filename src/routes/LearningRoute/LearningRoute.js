import React, { Component } from 'react'
import Learning from '../../components/Learning/Learning';

class LearningRoute extends Component {
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
        <Learning handleGuessSubmit={this.handleGuessSubmit} />
      </section>
    );
  }
}

export default LearningRoute
