function validateName() {
   var inputName = document.getElementById("name");
   if(inputName.value == ""){
     document.getElementById("validateMsg").innerHTML = "Name must be filled.";
   }
   else {
     document.getElementById("validateMsg"). innerHTML = "";
   }
}
