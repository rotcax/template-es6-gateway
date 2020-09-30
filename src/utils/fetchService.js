import axios from 'axios';

const fetchService = async (url, method = 'GET', data = null, auth = null) => {
  try {
    const objectRequest = {
      method,
      url,
      data,
      headers: {
        'Content-Type': 'application/json'
      }
		}

		if(auth) objectRequest.headers['Authorization'] = auth;

    const result = await axios(objectRequest);
    return result.data;

  } catch(error) {
    const response = error.response;
    if(response) throw { statusCode: response.status, result: response.data };

    throw error;
  }
}

export default fetchService;
