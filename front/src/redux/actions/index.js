import {
  fetchCategories,
  fetchCategory,
  fetchProducts,
  fetchProduct,
  fetchComments,
  fetchUser,
} from '../../services/Fetchs';

export const SET_USER = 'SET_USER';

export const SET_COMMENT = 'SET_COMMENT';

export const SET_CATEGORIES = 'SET_CATEGORIES';
export const SET_CATEGORY = 'SET_CATEGORY';

export const SET_PRODUCT = 'SET_PRODUCT';
export const SET_PRODUCTS = 'SET_PRODUCTS';

export const actionCategories = (payload) => ({ type: SET_CATEGORIES, payload });
export const actionCategory = (payload) => ({ type: SET_CATEGORY, payload });

export const actionProducts = (payload) => ({ type: SET_PRODUCTS, payload });
export const actionProduct = (payload) => ({ type: SET_PRODUCT, payload });

export const actionUser = (payload) => ({ type: SET_USER, payload });

export const actionComment = (payload) => ({ type: SET_COMMENT, payload });

export const actionFetchCategory = (type, value1, value2) => (dispatch) => (
  fetchCategory[type](value1, value2)
    .then((response) => dispatch(actionCategory(response)))
);

export const actionFetchCategories = (type) => (dispatch) => (
  fetchCategories[type]()
    .then((response) => dispatch(actionCategories(response)))
);

export const actionFetchProduct = (type, value1, value2) => (dispatch) => (
  fetchProduct[type](value1, value2)
    .then((response) => dispatch(actionProduct(response)))
);

export const actionFetchProducts = (type, value) => (dispatch) => (
  fetchProducts[type](value)
    .then((response) => dispatch(actionProducts(response)))
);

export const actionFetchComment = (type, value) => (dispatch) => (
  fetchComments[type](value)
    .then((response) => dispatch(actionComment(response)))
);

export const actionFetchUser = (type, value1, value2) => (dispatch) => (
  fetchUser[type](value1, value2)
    .then((response) => dispatch(actionUser(response)))
);