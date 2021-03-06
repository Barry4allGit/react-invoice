
import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';
import customers from './customers';
import invoiceItems from './invoiceItems';
import invoices from './invoices';
import products from './products';

export default combineReducers({
  customers,
  invoices,
  invoiceItems,
  products,
  routing: routerReducer,
});
