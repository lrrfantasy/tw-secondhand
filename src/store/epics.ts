import { combineEpics } from 'redux-most';

import { epics as userEpic } from '../modules/user/actions';
import { epics as getProductsEpic } from '../modules/products/actions';

export default combineEpics([
    ...userEpic,
    ...getProductsEpic,
]);
