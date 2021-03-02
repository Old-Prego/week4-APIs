var firstNameInput = document.querySelector("#first-name");
var lastNameInput = document.querySelector("#last-name");
var emailInput = document.querySelector("#email");
var passwordInput = document.querySelector("#password");
var signUpButton = document.querySelector("#sign-up");

signUpButton.addEventListener("click", function(event) {
  event.preventDefault();
  
  // TODO: Create user object from submissio

  var contact = {
    firstName: firstNameInput.value,
    lastName: lastNameInput.value,
    email: emailInput.value,
    pass: passwordInput.value
  };

  // TODO: Set new submission to local storage 
  
  localStorage.setItem("contact",JSON.stringify(contact));

  var lastSubmission = JSON.parse(localStorage.getItem("contact"));

  console.log(lastSubmission);

});
