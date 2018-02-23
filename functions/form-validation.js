function validateName() {
  var para = document.createElement("span");
  var node = document.createTextNode("This is new.");
  para.appendChild(node);


  var element = document.createElement("p");
  var msg = document.createTextNode("Please, fill your name.");
  element.appendChild(msg);

  var name = document.getElementById("name-field").appendChild(element);

  if(name.value === ""){
    name.appendChild(element);
  }

}
