var container = document.querySelector(".container");

container.addEventListener("click", function(event) {
  var element = event.target;

  var state = element.getAttribute("data-state");

  if (state === "hidden"){
    element.dataset.state = "visible";
    element.innerHTML = element.getAttribute("data-number");
  } else {
    element.dataset.state = "hidden";
    element.innerHTML = "";
  }

  console.log(element);

  // TODO: Complete function
});
