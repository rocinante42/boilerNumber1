import axios from 'axios';

export function addIronPiece(data) {
  return dispatch => {
    return axios.post(`http://${window.location.host}/api/iron-pieces/`, data)
    .then(response => dispatch(
      {
        type: 'ADD_IRON_PIECE',
        payload: response,
      }))
    .catch(error => {
      console.log(error);
      return error;
    });
  };
}

export function getIronPiece() {
  return false;
}

export default addIronPiece;
