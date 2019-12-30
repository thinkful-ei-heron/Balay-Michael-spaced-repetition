import React, { Component } from 'react';
import LanguageApiService from '../services/language-api-service';

const LanguageContext = React.createContext({
  language: {},
  words: [],
  setLanguage: () => {},
  setWords: () => {},
  updateLanguage: () => {}
});

export default LanguageContext;

export class LanguageProvider extends Component {
  constructor(props) {
    super(props);
    const state = { language: {}, words: [] };
    this.state = state;
  }

  setLanguage = language => {
    this.setState({ language });
  };

  setWords = words => {
    this.setState({ words });
  };

  updateLanguage = () => {
    LanguageApiService.getLanguage().then(data => {
      this.setLanguage(data.language);
      this.setWords(data.words);
    });
  };

  render() {
    const value = {
      language: this.state.language,
      words: this.state.words,
      setLanguage: this.setLanguage,
      setWords: this.setWords,
      updateLanguage: this.updateLanguage
    };
    return (
      <LanguageContext.Provider value={value}>
        {this.props.children}
      </LanguageContext.Provider>
    );
  }
}
