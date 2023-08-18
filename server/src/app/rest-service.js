import axios from 'axios';
import { getAuthFromState, insertNewAuthToken } from '../database/db-utility';

export const getLearnRestToken = async (learnUrl, state, app) => {
  const auth_hash = new Buffer.from(`${app.setup.key}:${app.setup.secret}`).toString('base64');
  const auth_string = `Basic ${auth_hash}`;
  console.log(`Auth9 - Auth string: ${auth_string}`);
  const options = {
    headers: {
      Authorization: auth_string,
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  };
  console.log(`Auth10 - Getting REST bearer token at ${learnUrl}`);
  try {
    console.log('Auth11 - Get access token for use in later public API requests');
    const response = await axios.post(learnUrl, 'grant_type=authorization_code', options);
    const token = response.data.access_token;

    // Cache the REST token
    await insertNewAuthToken(state, `${token}`, 'learn_rest_token');
    return token;
  } catch (exception) {
    console.log(`Auth - Failed to get token with response ${JSON.stringify(exception)}`);
    return '';
  }
};

export const getCachedToken = async (nonce) => {
  const auth = await getAuthFromState(nonce);
  return auth['learn_rest_token'];
};
