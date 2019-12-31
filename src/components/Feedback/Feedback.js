import React, { Component } from 'react'
import LanguageContext from '../../contexts/LanguageContext'
import Button from '../Button/Button'
import { Link } from 'react-router-dom'
import './Feedback.css'

export default class Feedback extends Component {

  static contextType = LanguageContext

  render() {
    return (
      <>
        <div className="feedback__container">
          <h2>{this.context.feedback.isCorrect ? 'You are correct!' : 'Wrong Answer!'}</h2>
          {!this.context.feedback.isCorrect && <h3>The translation for {this.context.nextWord.nextWord} is {this.context.feedback.answer}</h3>}
          <div className="feedback__scores">
            <p>Your total score is: {this.context.feedback.totalScore}</p>
            <p>You have answered this word correctly {this.context.feedback.wordCorrectCount} times.</p>
            <p>You have answered this word incorrectly {this.context.feedback.wordIncorrectCount} times.</p>
          </div>
          <Link to='/learn'><Button>Try Next Word</Button></Link>
        </div>
      </>
    )
  }
}