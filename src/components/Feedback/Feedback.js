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
          <h2 className="result">{this.context.feedback.isCorrect ? 'You were correct! :D' : 'Good try, but not quite right :('}</h2>
          <h3>The correct translation for {this.context.nextWord.nextWord} was {this.context.feedback.answer} and you chose {this.context.answer}!</h3>
          <div className="feedback__scores">
            <p className="totalScore">Your total score is: {this.context.feedback.totalScore}</p>
            <p className="correctGuesses">You have answered this word correctly {this.context.feedback.wordCorrectCount} times.</p>
            <p className="incorrectGuesses">You have answered this word incorrectly {this.context.feedback.wordIncorrectCount} times.</p>
          </div>
          <Link to='/learn'><Button>Try another word!</Button></Link>
        </div>
      </>
    )
  }
}