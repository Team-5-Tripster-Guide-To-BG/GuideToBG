function validateForm() {
  var isValid = true;

  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var errorList = document.getElementById("error-msg");

  $("#error-msg li").remove();

  var eventHandler = function(event) {
    event.preventDefault();
  };

  var reMail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  var reName = /^[A-Za-z]+$/;

  if(name == "" || email == "")
  {
    var element = document.createElement("li");
    var msg = document.createTextNode("Please enter name and email address.");
    element.appendChild(msg);
    element.className = "alert";
    errorList.appendChild(element);
    isValid = false;
  }

  if(!reName.test(name) && name){
    var element = document.createElement("li");
    var msg = document.createTextNode("The name field can't contain any numbers or special characters.");
    element.appendChild(msg);
    element.className = "alert";
    errorList.appendChild(element);
    isValid = false;
  }

  if(!reMail.test(email) && email){
    var element = document.createElement("li");
    var msg = document.createTextNode("Please enter a valid email address.");
    element.appendChild(msg);
    element.className = "alert";
    errorList.appendChild(element);
    isValid = false;
  }

  return isValid;
}
