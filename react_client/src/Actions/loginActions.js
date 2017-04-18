import axios from 'axios';

export function fetchUserName(username, password) {
  return dispatch => {
    return axios.get(`/auth/users?username=${username}&password=${password}`)
      .then(response => dispatch({
        type: 'SETTING_SESSION',
        data: response.data[0],
      }))
      .catch(error => { console.log(error); });
  };
}

export function loginCheck(email, password) {
  return {
    type: 'LOGIN_CHECK',
    email,
    password,
  };
}

export default loginCheck;
