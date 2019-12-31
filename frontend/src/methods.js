const api = new InvoiceGeneratorApi();
const loadInvoices = () => {
  api.getInvoices().then(invoices => renderInvoices(invoices));
};

function renderInvoices(invoices) {
  invoices.forEach(invoice => {
    invoiceNumLi.classList.add("list-group-item");
    const invBtn = document.createElement("button");
    ["btn", "btn-secondary", "btn-lg", "active"].forEach(cls =>
      invBtn.classList.add(cls)
    );
    invBtn.style.margin = "10px";
    invBtn.innerText = `Invoice No.: ${invoice.invoiceNumber}`;
    invBtn.id = `invoice-${invoice.id}`;
    invoiceNumLi.append(invBtn);
    invoiceUl.append(invoiceNumLi);

    invBtn.addEventListener("click", () => {
      // const invContainer = document.querySelector("#invoice-container");
      // invContainer.style.visibility = "hidden";
      renderInvoice(invoice.id);
    });
  });
}

function renderInvoice(invId) {
  api.getInvoice(invId).then(invoice => listingInv(invoice));
}

function listingInv(invoice) {
  showInvDetail.innerHTML = "";
  logoImg.src = invoice.logo;
  invNum.innerText = `Invoice # ${invoice.invoiceNumber}`;
  userName.innerText = `User Name: ${invoice.user.name}`;
  userAddr.innerText = `User Adress: ${invoice.user.address}`;
  userCardBody.classList.add("card-body");
  userCard.append(userName, userAddr);
  userCard.append(userCardBody);
  buyerName.innerText = `Buyer Name: ${invoice.buyer.name}`;
  buyerAddr.innerText = `Buyer Adress: ${invoice.buyer.address}`;
  userCardBody.classList.add("card-body");
  buyerCard.append(buyerName, buyerAddr);
  buyerCard.append(buyerCardBody);

  showInvDetail.append(logoImg, invNum, userCard, buyerCard);
}
