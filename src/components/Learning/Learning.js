import React, { Component } from 'react'
import LanguageContext from '../../contexts/LanguageContext';
import LanguageApiService from '../../services/language-api-service';
import { Input, Required, Label } from '../Form/Form'
import { withRouter } from 'react-router-dom'
import Button from '../Button/Button'
import './Learning.css'

class Learning extends Component {
  static defaultProps = {
    handleGuessSubmit: () => {}
  }

  state = {
    error: null,
    hasNewWord: false
  }

  static contextType = LanguageContext;

  firstInput = React.createRef()

  componentDidMount() {
    this.context.getNextWord().catch(e => {
      const err = JSON.parse(e.message)
      if (err.status === 401) {
        this.props.logout();
        this.props.history.push('/login')
      } else {
        this.setState({ error: err.error })
      }
    })
    this.firstInput.current.focus();
  }

  handleSubmit = e => {
    e.preventDefault();
    const { guess } = e.target;
    LanguageApiService.guessWord(guess.value)
      .then(res => {
        this.context.setAnswer(guess.value)
        guess.value = ''
        this.context.setFeedback(res) 
        this.props.handleGuessSubmit()
      })
      .catch(e => {
        const err = JSON.parse(e.message)
        if (err.status === 401) {
          this.props.logout();
          this.props.history.push('/login')
        } else {
          this.setState({ error: err.error })
        }
      })
  }

  render() {
    const { error } = this.state
    return (
      <>
        <h2 id="next_word">Translate the word: <span>{this.context.nextWord.nextWord}</span></h2>
        <div className="scores">
          <p>Your total score is: {this.context.nextWord.totalScore}</p>
          <p>You have answered this word correctly {this.context.nextWord.wordCorrectCount} times.</p>
          <p>You have answered this word incorrectly {this.context.nextWord.wordIncorrectCount} times.</p>
        </div>
        <div role='alert'>
          {error && <p>{error}</p>}
        </div>
        <form className="guess__form" onSubmit={this.handleSubmit}>
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

export default withRouter(Learning)