import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Button from '../Button/Button'
import LanguageContext from '../../contexts/LanguageContext';
import './Dashboard.css';

class Dashboard extends Component {
    static contextType = LanguageContext

    state = {
        wordlistExpand: false
    }

    componentDidMount() {
        this.context.updateLanguage()
    }

    renderWordlist() {
        return (
            <ul className="wordlist">
                {this.context.words.map(word => {
                    return (
                        <li key={word.id}>
                            <span>{word.original}</span>
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
              <h3 className="language">Language: Turkish</h3>
              <div className="wordlist__label">
                <h4>Words to practice</h4>
                <span onClick={this.toggleWordlist}>{!this.state.wordlistExpand ? '+' : '-'}</span>
              </div>
              {this.state.wordlistExpand ? this.renderWordlist() : ''}
              <Link to='/learn_word'><Button>Start Practicing!</Button></Link>
            </>
        )
    }
}

export default Dashboard;