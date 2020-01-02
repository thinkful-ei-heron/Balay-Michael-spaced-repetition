import config from '../config';
import TokenService from './token-service';

const LanguageApiService = {
  async getLanguage() {
    const res = await fetch(`${config.API_ENDPOINT}/language`, {
      headers: {
        authorization: `Bearer ${TokenService.getAuthToken()}`
      }
    });
    if (!res.ok) {
      throw new Error(JSON.stringify({ status: res.status, error: res.statusText }))
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
    if (!res.ok) {
      throw new Error(JSON.stringify({ status: res.status, error: res.statusText }))
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
      throw new Error(JSON.stringify({ status: res.status, error: res.statusText }))
    } 
    const json = await res.json();
    return json;
  }
};

export default LanguageApiService;
