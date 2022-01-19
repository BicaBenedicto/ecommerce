import { SET_PRODUCTS, SET_PRODUCT, SET_COMMENT } from '../actions';

const INITIAL_STATE = {
  products: [],
  product: {},
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
        comment: state.product.comment,
      },
    });
  case SET_COMMENT:
    return ({
      ...state,
      product: {
        ...state.product,
        comment: payload,
      },
    });
  default:
    return state;
  }
}

export default products;
