import { SET_CATEGORIES, SET_CATEGORY } from '../actions';

const INITIAL_STATE = {
  categories: [],
  category: {},
};

function categories(state = INITIAL_STATE, { type, payload }) {
  switch (type) {
  case SET_CATEGORIES:
    return ({
      ...state,
      categories: payload,
    });
  case SET_CATEGORY:
    return ({
      ...state,
      category: payload,
    });
  default:
    return state;
  }
}

export default categories;
