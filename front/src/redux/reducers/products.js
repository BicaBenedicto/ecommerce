import { SET_PRODUCTS, SET_PRODUCT, SET_COMMENT } from '../actions';

const INITIAL_STATE = {
  products: [],
  product: {
    comments: [],
  },
};

function products(state = INITIAL_STATE, { type, payload }) {
  switch (type) {
  case SET_PRODUCTS:
    return ({
      ...state,
      products: payload,
    });
  case SET_PRODUCT:
    return ({
      ...state,
      product: {
        ...payload,
        comments: state.product.comments,
      },
    });
  case SET_COMMENT:
    return ({
      ...state,
      product: {
        ...state.product,
        comments: payload,
      },
    });
  default:
    return state;
  }
}

export default products;
