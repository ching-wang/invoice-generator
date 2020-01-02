window.addEventListener("DOMContentLoaded", () => {
  loadInvoices();
});

selectNewInvBtn().addEventListener("click", () => {
  api.postInvoice({ user_id: 1 }).then(data => renderInvoice(data.id));
});

// selectTitle().addEventListener("click", () => {
//   window.alert("Hello there! this is your invoice generator!");
// });
