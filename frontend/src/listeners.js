window.addEventListener("DOMContentLoaded", () => {
  loadInvoices();
});

selectNewInvBtn().addEventListener("click", () => {
  api
    .postInvoice({
      invoiceNumber: "-",
      invoiceDate: new Date().toISOString(),
      duedate: new Date().toISOString(),
      user_id: 1
    })
    .then(data => renderInvoice(data.id));
});
