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
  api.getInvoice(invId).then(invoice => displayInv(invoice));
}

function displayInv(invoice) {
  showInvDetail.innerHTML = "";
  invNum.innerHTML = "";
  userName.innerHTML = "";

  const invLogoCol = document.createElement("div");
  invLogoCol.classList.add("col-3");
  invLogoCol.append(invNum);
  invLogoCol.append(logoImg);

  logoImg.src = invoice.logo;

  const invNumContent = document.createElement("span");
  invNum.textContent = "Invoice # ";
  invNum.append(invNumContent);
  invNumContent.innerText = invoice.invoiceNumber;
  addEditListener(invNumContent, event => {
    api
      .patchInvoice(invoice.id, {
        invoiceNumber: event.target.textContent.trim()
      })
      .then(data => {
        event.target.textContent = data.invoiceNumber;
      });
  });

  const invUserCol = document.createElement("div");
  invUserCol.classList.add("col");
  invUserCol.append(userCard);

  userName.id = "user-name";
  userName.textContent = "User Name: ";
  const userNameContent = document.createElement("span");
  userNameContent.innerText = invoice.user.name || "-";
  userName.append(userNameContent);

  addEditListener(userNameContent, event => {
    console.log(event.target.textContent);
    api
      .patchUser(invoice.user.id, { name: event.target.textContent })
      .then(data => {
        event.target.textContent = data.name;
      });
  });

  userAddr.innerText = `User Adress: ${invoice.user.address || "-"}`;
  userCardBody.append(userName, userAddr);
  userCard.append(userCardBody);

  const invBuyerCol = document.createElement("div");
  invBuyerCol.classList.add("col");
  invBuyerCol.append(buyerCard);

  buyerName.innerText = `Bill to: ${invoice.buyer.name}`;
  buyerAddr.innerText = `${invoice.buyer.address}`;
  buyerCardBody.classList.add("card-body");
  buyerCardBody.append(buyerName, buyerAddr);
  buyerCard.append(buyerCardBody);

  displayWorkItems(invoice.workItems);

  showInvDetail.append(invLogoCol, invUserCol, invBuyerCol);
}
