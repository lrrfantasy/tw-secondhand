import * as D from '../definitions';
import { fetchJson } from './utils';

export const getProductList = (): Promise<D.ProductsState> => (
  fetchJson('http://secondhand.leanapp.cn/products', null)
);
