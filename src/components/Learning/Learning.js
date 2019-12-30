import React, { Component } from 'react'
import LanguageContext from '../../contexts/LanguageContext';
import { Input, Required, Label } from '../Form/Form'
import Button from '../Button/Button'
import './Learning.css'

class Learning extends Component {
  static contextType = LanguageContext;

  firstInput = React.createRef()

  componentDidMount() {
    this.context.getNextWord();
  }

  render() {
    return (
      <>
        <h2 id="next_word">Translate the word: <span>{this.context.nextWord.nextWord}</span></h2>
        <div className="scores">
          <p>Your total score is: {this.context.nextWord.totalScore}</p>
          <p>You have answered this word correctly {this.context.nextWord.wordCorrectCount} times.</p>
          <p>You have answered this word incorrectly {this.context.nextWord.wordIncorrectCount} times.</p>
        </div>
        <form className="guess__form">
          <div className="guess__word">
            <Label htmlFor='learn-guess-input'>
              What's the translation for this word? <Required />
            </Label>
            <Input
              ref={this.firstInput}
              id='learn-guess-input'
              name='guess'
              required
            />
          </div>
          <Button type="submit">Submit your answer</Button>
        </form>
      </>
    );
  }
}

export default Learning