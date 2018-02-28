function validateForm() {
  let isValid = true;

  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let errorList = document.getElementById("error-msg");

  $("#error-msg li").remove();

    let eventHandler = function(event) {
    event.preventDefault();
  };

  let reMail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  let reName = /^[A-Za-z]+$/;

  if(name == "" || email == "")
  {
    let element = document.createElement("li");
    const msg = document.createTextNode("Please enter name and email address.");
    element.appendChild(msg);
    element.className = "alert alert-danger";
    errorList.appendChild(element);
    isValid = false;
  }

  if(!reName.test(name) && name){
    let element = document.createElement("li");
    const msg = document.createTextNode("The name field can't contain any numbers or special characters.");
    element.appendChild(msg);
    element.className = "alert alert-danger";
    errorList.appendChild(element);
    isValid = false;
  }

  if(!reMail.test(email) && email){
    let element = document.createElement("li");
    const msg = document.createTextNode("Please enter a valid email address.");
    element.appendChild(msg);
    element.className = "alert alert-danger";
    errorList.appendChild(element);
    isValid = false;
  }

  return isValid;
}
