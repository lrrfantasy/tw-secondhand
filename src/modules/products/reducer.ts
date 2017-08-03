import * as D from '../../definitions';
import * as Redux from 'redux';

const initialState: D.ProductsState = null;

const productsReducer: Redux.Reducer<D.ProductsState> =
  (state: D.ProductsState, action: D.GetProductsAction): D.ProductsState => {
  state = state || initialState;
  switch (action.type) {
    case 'GET_PRODUCTS_SUC':
      return state || action.payload;
    default:
  }
  return state;
};

export default productsReducer;
