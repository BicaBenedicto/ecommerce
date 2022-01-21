import { SET_USER } from '../actions';

const INITIAL_STATE = {
  id: '',
  username: '',
  email: '',
  age: '',
  gender: '',
  location: '',
};

function user(state = INITIAL_STATE, { type, payload }) {
  switch (type) {
  case SET_USER:
    return payload;
  default:
    return state;
  }
}

export default user;
