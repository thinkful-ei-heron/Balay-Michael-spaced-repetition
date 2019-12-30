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
      throw new Error('bad auth');
    }
    const json = await res.json();
    return json;
  }
};

export default LanguageApiService;
