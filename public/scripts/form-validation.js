function validateForm() {
    let isValid = true;
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let errorList = document.getElementById("error-msg");

    $("#error-msg li").remove();

    let reMail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    let reName = /^[A-Za-z]+$/;

    if(name == "" || email == "")
    {
      var element = document.createElement("li");
      var msg = document.createTextNode("Please fill your name and email address.");
      element.appendChild(msg);
      element.className = "alert alert-danger";
      errorList.appendChild(element);
      isValid = false;
      return isValid;
    }

    if(!reName.test(name)){
      var element = document.createElement("li");
      var msg = document.createTextNode("The name field can't contain any numbers or special characters.");
      element.appendChild(msg);
      element.className = "alert alert-danger";
      errorList.appendChild(element);
      isValid = false;
    }

    if(!reMail.test(email)){
      var element = document.createElement("li");
      var msg = document.createTextNode("Please enter a valid email address.");
      element.appendChild(msg);
      element.className = "alert alert-danger";
      errorList.appendChild(element);
      isValid = false;
    }

    if(isValid){
      saveForm();
    }

    return isValid;
  }
