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

  logoImg.src = invoice.logo;

  const invNumContent = document.createElement("span");
  invNum.append(invNumContent);
  invNumContent.innerText = `Invoice # ${invoice.invoiceNumber}`;

  const invNumEditBtn = document.createElement("button");

  invNumEditBtn.classList.add("btn");
  invNumEditBtn.classList.add("btn-link");
  invNumEditBtn.classList.add("btn-sm");
  invNumEditBtn.innerText = "Edit";

  console.log("Appending invoice number edit button");
  invNum.append(invNumEditBtn);

  invNumEditBtn.addEventListener("click", () => {
    invNumContent.style.display = "none";
    invNumEditBtn.style.display = "none";

    const newInvoiceNumForm = document.createElement("form");
    newInvoiceNumForm.classList.add("form-inline");

    const newInvoiceNum = document.createElement("input");
    newInvoiceNum.value = invNumContent.textContent;
    newInvoiceNumForm.append(newInvoiceNum);

    const saveNewInvoiceNum = document.createElement("button");
    saveNewInvoiceNum.type = "submit";
    saveNewInvoiceNum.classList.add("btn");
    saveNewInvoiceNum.classList.add("btn-link");
    saveNewInvoiceNum.classList.add("btn-sm");
    saveNewInvoiceNum.innerText = "Save";
    newInvoiceNumForm.append(saveNewInvoiceNum);

    const resetInvoiceNum = () => {
      invNumContent.style.display = "inline";
      invNumEditBtn.style.display = "inline";
      newInvoiceNumForm.remove();
    };

    invNum.append(newInvoiceNumForm);

    newInvoiceNumForm.addEventListener("submit", event => {
      event.preventDefault();

      api
        .patchInvoice(invoice.id, newInvoiceNum.value)
        .then(data => {
          invNumContent.innerText = data.invoiceNumber;
          resetInvoiceNum();
        })
        .catch(() => resetInvoiceNum());
    });
  });

  userName.innerText = `User Name: ${invoice.user.name}`;
  const userNameEditBtn = document.createElement("button");
  userNameEditBtn.innerText = "Edit";
  console.log("Appending user name edit button");
  userName.append(userNameEditBtn);

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
