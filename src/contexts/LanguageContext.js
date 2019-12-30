import React, { Component } from 'react';
import LanguageApiService from '../services/language-api-service';

const LanguageContext = React.createContext({
  language: {},
  words: [],
  nextWord: {},
  setLanguage: () => {},
  setWords: () => {},
  updateLanguage: () => {}
});

export default LanguageContext;

export class LanguageProvider extends Component {
  constructor(props) {
    super(props);
    const state = { language: {}, words: [], nextWord: {} };
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
  }

  render() {
    const value = {
      language: this.state.language,
      words: this.state.words,
      nextWord: this.state.nextWord,
      setLanguage: this.setLanguage,
      setWords: this.setWords,
      updateLanguage: this.updateLanguage,
      getNextWord: this.getNextWord
    };
    return (
      <LanguageContext.Provider value={value}>
        {this.props.children}
      </LanguageContext.Provider>
    );
  }
}
