import { push } from 'react-router-redux';
import axios from 'axios';
import { apiURL } from '../services/apiURL';


export const getInvoices = () => ({
  type: 'GET_INVOICES',
  payload: axios.get(`${apiURL}/api/invoices`).then(res => res.data),
});
export const getInvoiceById = (id) => ({
  type: 'GET_INVOICE_BY_ID',
  payload: axios.get(`${apiURL}/api/invoices/${id}`).then(res => res.data),
});

export const sendInvoices = (data, itemsArr) => (dispatch) => {
  const response = dispatch({
    type: 'SEND_INVOICES',
    payload: axios.post(`${apiURL}/api/invoices`, { ...data }),
  });
  response.then((data) => {
    const invoiceId = data.value.data.id;
    return Promise.all(itemsArr.map(elem => axios.post(`${apiURL}/api/invoices/${invoiceId}/items`, { product_id: elem.productId, quantity: elem.qtyValue }))).then(data => invoiceId);
  }).then(() => {
    dispatch(push(`/invoices/`));
  });
};

export const changeInvoice = (id, data) => ({
  type: 'CHANGE_INVOICE',
  payload: axios.put(`${apiURL}/api/invoices/${id}`, {...data}).then(res => res.data),
});
{

};

export const deleteInvoice = id => (dispatch) => {
  axios.delete(`${apiURL}/api/invoices/${id}`).then(res => console.log(res));
};
