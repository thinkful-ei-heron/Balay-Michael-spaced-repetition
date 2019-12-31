import React, { Component } from 'react';
import LanguageApiService from '../services/language-api-service';

const LanguageContext = React.createContext({
  language: {},
  words: [],
  nextWord: {},
  feedback: {},
  setLanguage: () => {},
  setWords: () => {},
  updateLanguage: () => {},
  getNextWord: () => {},
  guessWord: () => {},
  setFeedback: () => {}
});

export default LanguageContext;

export class LanguageProvider extends Component {
  constructor(props) {
    super(props);
    const state = { language: {}, words: [], nextWord: {}, feedback: {} };
    this.state = state;
  }

  setLanguage = language => {
    this.setState({ language });
  };

  setWords = words => {
    this.setState({ words });
  };

  setNextWord = nextWord => {
    this.setState({ nextWord });
  }

  setFeedback = feedback => {
    this.setState({ feedback });
  }

  updateLanguage = () => {
    LanguageApiService.getLanguage().then(data => {
      this.setLanguage(data.language);
      this.setWords(data.words);
    });
  };

  getNextWord = () => {
    LanguageApiService.getNextWord().then(data => {
      this.setNextWord(data)
    })
  };

  guessWord = (guess) => {
    const result = LanguageApiService.guessWord(guess)
      .then(data => {
        this.setFeedback(data)
      })
      return result
  }

  render() {
    const value = {
      language: this.state.language,
      words: this.state.words,
      nextWord: this.state.nextWord,
      feedback: this.state.feedback,
      setLanguage: this.setLanguage,
      setWords: this.setWords,
      updateLanguage: this.updateLanguage,
      getNextWord: this.getNextWord,
      guessWord: this.guessWord,
      setFeedback: this.setFeedback
    };
    return (
      <LanguageContext.Provider value={value}>
        {this.props.children}
      </LanguageContext.Provider>
    );
  }
}
