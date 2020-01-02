const displayWorkItems = invoice => {
  const workItems = invoice.workItems || [];
  const existingContainer = document.querySelector("#work-items");
  if (existingContainer) {
    existingContainer.remove();
  }

  const workItemsContainer = document.createElement("div");
  workItemsContainer.classList.add("container");
  workItemsContainer.id = "work-items";

  // const workItemsTitle = document.createElement("h5");
  // workItemsTitle.textContent = `Invoice Work Items: ${workItems.length}`;
  // workItemsContainer.append(document.createElement("hr"));
  // workItemsContainer.append(workItemsTitle);

  const addWorkItemButton = displayAddWorkItemButton(invoice);
  workItemsContainer.append(addWorkItemButton);

  workItemsContainer.append(document.createElement("hr"));

  const headerRow = displayWorkItemHeader();
  workItemsContainer.append(headerRow);

  workItems.forEach(workItem => {
    const workItemRow = displayWorkItem(workItem);
    workItemsContainer.append(workItemRow);
  });

  return workItemsContainer;
};

const displayWorkItemHeader = () => {
  const headerContainer = document.createElement("div");
  headerContainer.classList.add("row");
  headerContainer.classList.add("header-row");

  ["Description", "Quantity", "Amount", "Sub-total"].forEach(
    (headerText, i) => {
      const headerCol = createCol();
      const header = document.createElement("h4");
      if (i !== 0) {
        header.style.textAlign = "right";
      }
      header.textContent = headerText;
      headerCol.append(header);
      headerContainer.append(headerCol);
    }
  );

  return headerContainer;
};

const displayWorkItem = workItem => {
  const workItemContainer = document.createElement("div");
  workItemContainer.id = `work-item-${workItem.id}`;
  workItemContainer.classList.add("row");
  workItemContainer.classList.add("work-item-row");

  const workItemDesc = createCol();
  workItemDesc.textContent = workItem.description;
  addEditListener(workItemDesc, event => {
    api
      .patchWorkItem(workItem.id, { description: event.target.textContent })
      .then(data => (event.target.textContent = data.description));
  });

  const workItemQuantity = createCol();
  workItemQuantity.classList.add("number-col");
  workItemQuantity.textContent = parseFloat(workItem.quantity);
  addEditListener(workItemQuantity, event => {
    if (isNaN(parseFloat(event.target.textContent))) {
      return;
    }
    api
      .patchWorkItem(workItem.id, {
        quantity: parseFloat(event.target.textContent)
      })
      .then(data => {
        event.target.textContent = parseFloat(data.quantity);
        updateWorkItemRowSubTotal(data);
      });
  });

  const workItemAmount = createCol();
  workItemAmount.classList.add("number-col");
  workItemAmount.textContent = money(workItem.amount);
  addEditListener(workItemAmount, event => {
    const newAmount = parseFloat(
      String(event.target.textContent).replace(/[^0-9\.]/g, "")
    );
    api.patchWorkItem(workItem.id, { amount: newAmount }).then(data => {
      event.target.textContent = money(data.amount);
      updateWorkItemRowSubTotal(data);
    });
  });

  const workItemSubTotal = createCol();
  workItemSubTotal.id = `work-item-subtotal-${workItem.id}`;
  workItemSubTotal.classList.add("number-col");
  workItemSubTotal.textContent = money(subTotalForWorkItem(workItem));

  workItemContainer.append(
    workItemDesc,
    workItemQuantity,
    workItemAmount,
    workItemSubTotal
  );

  return workItemContainer;
};

const subTotalForWorkItem = workItem => {
  const quantity = parseFloat(workItem.quantity);
  const amount = parseFloat(workItem.amount);

  return quantity * amount;
};

function money(amount) {
  return `£ ${parseFloat(amount).toFixed(2)}`;
}

const displayAddWorkItemButton = invoice => {
  const addWorkItemButton = document.createElement("button");
  ["btn", "btn-success"].forEach(cls => addWorkItemButton.classList.add(cls));
  addWorkItemButton.textContent = "+ Add new work item";

  addWorkItemButton.addEventListener("click", () => {
    api
      .postWorkItem({
        invoice_id: invoice.id,
        description: "New work item",
        amount: 0.0,
        quantity: 0.0
      })
      .then(data => {
        document.querySelector("#work-items").append(displayWorkItem(data, 0));
      });
  });

  return addWorkItemButton;
};

function updateWorkItemRowSubTotal(workItem) {
  const subTotalCol = document.querySelector(
    `#work-item-subtotal-${workItem.id}`
  );
  if (!subTotalCol) {
    debugLog("Failed to find sub total col", { workItem });
    return;
  }
  subTotalCol.textContent = money(subTotalForWorkItem(workItem));
}
