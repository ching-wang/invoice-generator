function renderInvoices(invoices) {
  invoices
    .filter(invoice => !!invoice.invoiceNumber)
    .forEach(invoice => {
      invoiceNumLi.classList.add("list-group-item");
      const invBtn = document.createElement("button");
      ["btn", "btn-secondary", "btn-lg", "active"].forEach(cls =>
        invBtn.classList.add(cls)
      );
      invBtn.style.margin = "10px";
      invBtn.innerText = `Invoice Nº ${invoice.invoiceNumber}`;
      invBtn.id = `invoice-${invoice.id}`;
      invoiceNumLi.append(invBtn);
      invoiceUl.append(invoiceNumLi);

      invBtn.addEventListener("click", () => {
        renderInvoice(invoice.id);
      });
    });
}

function renderInvoice(invId) {
  api.getInvoice(invId).then(invoice => {
    displayInv(invoice);

    const workItemsCont = displayWorkItems(invoice.workItems);
    invoiceCardBody.append(workItemsCont);
  });
}

function displayInv(invoice) {
  resetInvoice();

  const invLogoCol = displayInvoiceLogo(invoice);
  displayInvoiceNumber(invoice);

  const invDate = displayInvoiceDate(invoice);
  const invDueDate = displayInvDueDate(invoice);
  const invUserCol = displayInvoiceUser(invoice);
  const invBuyerCol = displayInvoiceBuyer(invoice);
  showInvDetail.append(invLogoCol, invUserCol, invBuyerCol);
}

const resetInvoice = () => {
  showInvDetail.innerHTML = "";
  invNum.innerHTML = "";
  userName.innerHTML = "";
};

const displayInvoiceLogo = invoice => {
  const invLogoCol = document.createElement("div");
  invLogoCol.classList.add("col-3");

  if (invoice.logo) {
    logoImg.src = invoice.logo;
  } else {
    logoImg.src =
      "https://cdn.shopify.com/s/files/1/0533/2089/files/placeholder-images-image_large.png";
  }

  invLogoCol.append(invNum);
  invLogoCol.append(logoImg);

  return invLogoCol;
};

const displayInvoiceNumber = invoice => {
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
        document.querySelector(
          `#invoice-${invoice.id}`
        ).textContent = `Invoice Nº ${data.invoiceNumber}`;
      });
  });
};

const displayInvoiceDate = invoice => {
  const invDateContent = document.createElement("span");
  invDate.textContent = "Invoice Date: ";
  invDate.append(invDateContent);
  invDateContent.innerText = invoice.invoiceDate;

  addEditListener(invDateContent, event => {
    api
      .patchInvoice(invoice.id, {
        invoiceDate: event.target.textContent.trim()
      })
      .then(data => {
        event.target.textContent = data.invoiceDate;
      });
  });
};

const displayInvDueDate = invoice => {
  const invDueDateContent = document.createElement("span");
  invDueDate.textContent = "Due Date: ";
  invDueDate.append(invDueDateContent);
  invDueDateContent.innerText = invoice.duedate;

  addEditListener(invDueDateContent, event => {
    api
      .patchInvoice(invoice.id, {
        duedate: event.target.textContent.trim()
      })
      .then(data => {
        event.target.textContent = data.duedate;
      });
  });
};

const displayInvoiceUser = invoice => {
  const invUserCol = createCol();
  userCard.append(invDate);
  invUserCol.append(invDate, userCard);

  userName.id = "user-name";
  userName.textContent = "User Name: ";
  const userNameContent = document.createElement("span");
  userNameContent.innerText = invoice.user.name || "-";
  userName.append(userNameContent);

  addEditListener(userNameContent, event => {
    //console.log(event.target.textContent);
    api
      .patchUser(invoice.user.id, { name: event.target.textContent })
      .then(data => {
        event.target.textContent = data.name;
      });
  });

  userAddr.innerText = `User Address: ${invoice.user.address || "-"}`;
  userCardBody.append(userName, userAddr);
  userCard.append(userCardBody);

  return invUserCol;
};

const displayInvoiceBuyer = invoice => {
  const invBuyerCol = createCol();
  invBuyerCol.append(invDueDate, buyerCard);

  buyerName.id = "buyer-name";
  buyerName.textContent = "Bill to: ";
  const buyerNameContent = document.createElement("span");
  buyerNameContent.innerText = invoice.buyer.name || "-";
  buyerName.append(buyerNameContent);

  addEditListener(buyerNameContent, event => {
    //console.log(event.target.textContent);
    api
      .patchBuyer(invoice.buyer.id, { name: event.target.textContent })
      .then(data => {
        console.log((event.target.textContent = data.name));
      });
  });

  //buyerName.innerText = `Bill to: ${invoice.buyer.name}`;

  buyerAddr.innerText = `Address: ${invoice.buyer.address}`;
  //buyerCardBody.classList.add("card-body");
  buyerCardBody.append(buyerName, buyerAddr);
  buyerCard.append(buyerCardBody);

  return invBuyerCol;
};
