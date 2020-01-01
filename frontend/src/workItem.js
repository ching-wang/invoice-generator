const displayWorkItems = workItems => {
  const existingContainer = document.querySelector("#work-items");
  if (existingContainer) {
    existingContainer.remove();
  }
  const workItemsContainer = document.createElement("div");
  workItemsContainer.id = "work-items";

  workItems.forEach(workItem => {
    displayWorkItem(workItem);
  });

  return workItemsContainer;
};

const displayWorkItem = workItem => {
  const workItemContainer = document.createElement("div");
  //
};
