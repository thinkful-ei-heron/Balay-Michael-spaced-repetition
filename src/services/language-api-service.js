import config from '../config';
import TokenService from './token-service';

const LanguageApiService = {
  async getLanguage() {
    const res = await fetch(`${config.API_ENDPOINT}/language`, {
      headers: {
        authorization: `Bearer ${TokenService.getAuthToken()}`
      }
    });
    if (res.status === 401) {
      //unauthorized: token is bad
    }
    const json = await res.json();
    return json;
  },

  async getNextWord() {
    const res = await fetch(`${config.API_ENDPOINT}/language/head`, {
      headers: {
        authorization: `Bearer ${TokenService.getAuthToken()}`
      }
    });
    if (res.status === 401) {
      //unauthorized: token is bad
    }
    const json = await res.json();
    return json;
  },

  async guessWord(guess) {
    const guessObj = {
      guess: guess
    }
    const res = await fetch(`${config.API_ENDPOINT}/language/guess`, {
      method: 'POST',
      headers: {
        'authorization' : `Bearer ${TokenService.getAuthToken()}`,
        'content-type' : 'application/json'
      },
      body: JSON.stringify(guessObj)
    });
    if (!res.ok) {
      res.json().then(e => Promise.reject(e))
    } 
    const json = await res.json();
    return json;
  }
};

export default LanguageApiService;
