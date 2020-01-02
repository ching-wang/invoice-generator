window.addEventListener("DOMContentLoaded", () => {
  loadInvoices();
});

selectNewInvBtn().addEventListener("click", () => {
  api.postInvoice({});
});

// selectTitle().addEventListener("click", () => {
//   window.alert("Hello there! this is your invoice generator!");
// });
