import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import Button from '../Button/Button';
import LanguageContext from '../../contexts/LanguageContext';
import './Dashboard.css';

class Dashboard extends Component {
  static contextType = LanguageContext;

  state = {
    wordlistExpand: false
  };

  componentDidMount() {
    console.log('mount');
    this.context.updateLanguage().catch(() => {
      this.props.logout();
      this.props.history.push('/login');
    });
  }

    renderWordlist() {
        return (
            <ul className="wordlist">
                {this.context.words.map(word => {
                    return (
                        <li key={word.id}>
                            <h4>{word.original}</h4>
                            <div>
                                <span>Correct guesses: {word.correct_count}</span>
                                <span>Incorrect guesses: {word.incorrect_count}</span>
                            </div>
                        </li>
                    )
                })}
              </ul>
        )
    }

    toggleWordlist = () => {
        this.setState({
            wordlistExpand: !this.state.wordlistExpand
        })
    }
    render() {
        return (
            <>
              <h2 id="user__greeting">Language: {this.context.language.name}</h2>
              <h2 id="progress">Total correct answers: {this.context.language.total_score}</h2>
              <div className="wordlist__label">
                <h3>Words to practice</h3>
              </div>
              {!this.state.wordlistExpand ? this.renderWordlist() : ''}
              <Link to='/learn'><Button>Start Practicing</Button></Link>
            </>
        )
    }
}

export default withRouter(Dashboard);
