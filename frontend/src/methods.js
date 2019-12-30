const api = new InvoiceGeneratorApi();
const loadInvoices = () => {
  api.getInvoices().then(invoices => debugLog("invoices", { invoices }));
};

selectTitle().addEventListener("click", () => {
  window.alert("Hello there!");
});
