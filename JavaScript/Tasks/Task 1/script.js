document.onclick = function (event) {
    console.log(event);
  event = event || window.event;
  if(event.target.tagName == "IMG") {
      event.target.classList.add("checked");
  }
};