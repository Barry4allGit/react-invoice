const invoices = (state = {invoicesList: [], currentInvoice: {}}, action) => {
  switch (action.type) {
    case 'GET_INVOICES_FULFILLED':
      const invoicesList = action.payload;
      return { ...state, invoicesList};
    case 'GET_INVOICE_BY_ID_FULFILLED':
      const currentInvoice = action.payload;
      return { ...state, currentInvoice};
    case 'SEND_INVOICES_FULFILLED':
      const newInvoice = action.payload.data;
      let newInvoiceArr = [];
      newInvoiceArr = newInvoiceArr.concat(state.invoicesList);
      newInvoiceArr.push(newInvoice);
      return { ...state, invoicesList: newInvoiceArr};
    case 'CHANGE_INVOICE_FULFILLED':
      const newInvoiceValues = action.payload;
      let newInvoicesArr = [];
      newInvoicesArr = newInvoicesArr.concat(state.invoicesList);
      let oldInvoice;
      newInvoicesArr.forEach((elem, i) => {
        if (elem.id === newInvoiceValues.id) { oldInvoice = i }
      });
      newInvoicesArr[oldInvoice] = newInvoiceValues;
      return { invoicesList: newInvoicesArr, currentInvoice: newInvoiceValues};
    default:
      return state;
  }
}

export default invoices;
