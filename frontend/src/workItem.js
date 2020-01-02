const displayWorkItems = workItems => {
  const existingContainer = document.querySelector("#work-items");
  if (existingContainer) {
    existingContainer.remove();
  }

  const workItemsContainer = document.createElement("div");
  workItemsContainer.classList.add("container");
  workItemsContainer.id = "work-items";

  const workItemsTitle = document.createElement("h5");
  workItemsTitle.textContent = `Invoice Work Items: ${workItems.length}`;
  workItemsContainer.append(document.createElement("hr"));
  workItemsContainer.append(workItemsTitle);

  const headerRow = displayWorkItemHeader();
  workItemsContainer.append(headerRow);

  workItems.forEach((workItem, i) => {
    const workItemRow = displayWorkItem(workItem, i);
    workItemsContainer.append(workItemRow);
  });

  workItemsContainer.append(document.createElement("hr"));

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

const displayWorkItem = (workItem, i) => {
  const workItemContainer = document.createElement("div");
  workItemContainer.classList.add("row");
  if (i % 2 !== 0) {
    workItemContainer.classList.add("shade");
  }

  const workItemDesc = createCol();
  workItemDesc.textContent = workItem.description;

  const workItemQuantity = createCol();
  workItemQuantity.classList.add("number-col");
  workItemQuantity.textContent = parseFloat(workItem.quantity);

  const workItemAmount = createCol();
  workItemAmount.classList.add("number-col");
  workItemAmount.textContent = money(workItem.amount);

  const workItemSubTotal = createCol();
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

const money = amount => {
  return `£ ${parseFloat(amount).toFixed(2)}`;
};
