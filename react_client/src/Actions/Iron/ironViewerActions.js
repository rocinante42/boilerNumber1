import axios from 'axios';

export function fetchIronData() {
  return dispatch => {
    return axios.get(`http://${window.location.host}/api/iron-pieces/`)
      .then(response => dispatch(
        {
          type: 'FETCH_ALL_IRON',
          data: response.data,
        }))
      .catch(error => {
        return error;
      });
  };
}

export function nothin() {
  return { nothing: '' };
}

export default fetchIronData;
