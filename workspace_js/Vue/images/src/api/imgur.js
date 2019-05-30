import qs from 'qs';

const CLIENT_ID = '37336ee850d7718';
const ROOT_URL = 'https://api.imgur.com';


export default {
  login() {
      const querySting = {
        client_id: CLIENT_ID,
        response_type: 'token'
      };

      window.location = `${ROOT_URL}/oauth2/authorize?${qs.stringify(querySting)}`;
  }
};
