const api = new InvoiceGeneratorApi();
const loadInvoices = () => {
  api.getInvoices().then(invoices => renderInvoices(invoices));
};
