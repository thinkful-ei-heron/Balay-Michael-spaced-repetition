import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import Button from '../Button/Button';
import LanguageContext from '../../contexts/LanguageContext';
import './Dashboard.css';

class Dashboard extends Component {
  static contextType = LanguageContext;

  state = {
    error: null
  };

  componentDidMount() {
    this.context.updateLanguage().catch(e => {
      const err = JSON.parse(e.message);
      if (err.status === 401) {
        this.props.logout();
        this.props.history.push('/login');
      } else {
        this.setState({ error: err.error });
      }
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

    render() {
        const { error } = this.state
        return (
            <>
              <div className="alert">
                {error && <p>{error}</p>}
              </div>
              <h2 id="user__greeting">Language: {this.context.language.name}</h2>
              <h2 id="progress">Total correct answers: {this.context.language.total_score}</h2>
              <div className="wordlist__label">
                <h3>Words to practice</h3>
              </div>
              {this.renderWordlist()}
              <Link to='/learn'><Button>Start Practicing</Button></Link>
            </>
        )
    }
  // renderWordlist() {
  //   return (
  //     <ul className="wordlist">
  //       {this.context.words.map(word => {
  //         return (
  //           <li key={word.id}>
  //             <h4>{word.original}</h4>
  //             <div>
  //               <span>Correct guesses: {word.correct_count}</span>
  //               <span>Incorrect guesses: {word.incorrect_count}</span>
  //             </div>
  //           </li>
  //         );
  //       })}
  //     </ul>
  //   );
  // }

  // render() {
  //   const { error } = this.state;
  //   return (
  //     <>
  //       <div className="alert">{error && <p>{error}</p>}</div>
  //       <h2 id="user__greeting">Language: {this.context.language.name}</h2>
  //       <h2 id="progress">
  //         Total correct answers: {this.context.language.total_score}
  //       </h2>
  //       <div className="wordlist__label">
  //         <h3>Words to practice</h3>
  //       </div>
  //       {this.renderWordlist()}
  //       <Link to="/learn">
  //         <Button>Start Practicing</Button>
  //       </Link>
  //     </>
  //   );
  // }
}

export default withRouter(Dashboard);
