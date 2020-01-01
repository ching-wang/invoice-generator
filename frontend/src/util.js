function debugLog(message = "", data = {}) {
  console.log(`${message}\n${JSON.stringify(data)}`);
}

function createCol() {
  const col = document.createElement("div");
  col.classList.add("col");
  return col;
}
