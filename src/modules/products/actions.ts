import { fromPromise } from 'most';
import { select, Epic } from 'redux-most';

import * as D from '../../definitions';
import { getProductList } from '../../apis/products';

export const GET_PRODUCTS = 'GET_PRODUCTS';
export const GET_PRODUCTS_SUC = 'GET_PRODUCTS_SUC';
export const GET_PRODUCTS_FAIL = 'GET_PRODUCTS_FAIL';

export const getProducts = (): D.GetProductsAction => ({ type: GET_PRODUCTS, payload: null});

const getProductsEpic: Epic<D.GeneralAction> = (action$) => action$.thru(select(GET_PRODUCTS))
  .chain((action: D.GetProductsAction) => fromPromise(getProductList())
  .map((response: null | D.Product[]) => (
    response
      ? {type: GET_PRODUCTS_SUC, payload: response}
      : {type: GET_PRODUCTS_FAIL}
  )));

export const epics: Array<Epic<D.GeneralAction>> = [
  getProductsEpic,
];
