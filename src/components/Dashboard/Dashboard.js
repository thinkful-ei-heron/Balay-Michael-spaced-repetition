import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Button from '../Button/Button'
import './Dashboard.css';

class Dashboard extends Component {
    state = {
        wordlistExpand: false
    }

    renderWordlist() {
        return (
            <ul className="wordlist">
                <li>
                    <span>Word</span>
                    <span>Correct guesses: 3</span>
                    <span>Incorrect guesses: 4</span>
                </li>
                <li>
                    <span>Word</span>
                    <span>Correct guesses: 3</span>
                    <span>Incorrect guesses: 4</span>
                </li>
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