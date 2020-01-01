function addEditListener(elem, onEdit) {
  elem.setAttribute("contenteditable", true);
  elem.addEventListener("keydown", event => {
    if (event.keyCode === 13) {
      event.preventDefault();
      event.target.blur();
    }
  });
  elem.addEventListener("blur", event => {
    onEdit(event);
  });
}
