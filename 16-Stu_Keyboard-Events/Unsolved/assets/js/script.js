function keydownAction(event) {
  // TODO: Complete keydown function
  document.querySelector("#key").innerHTML = event.key;
  document.querySelector("#code").innerHTML = event.keyCode;
  document.querySelector("#status").innerHTML = "KEYDOWN Event";
}

function keyupAction() {
  document.querySelector("#status").innerHTML = "KEYUP Event";
}

document.addEventListener("keyup", keyupAction);
// TODO: Add Event Listener for "keydown" event
document.addEventListener("keydown", keydownAction);

