function saveForm(cotactDatabaseFunction){
  
  $(document).ready(function() {
    $("#contact-form").submit(function(event){

    });
  });
}
$(function() {
  $('#contact-form').on("submit",function(e) {
    e.preventDefault(); // cancel the actual submit

    const baseForMsgs = cotactDatabaseFunction;
    var name = $("#name").val();
    var email = $("#email").val();
    var msg = $("#message").val();

    var curentContact = {
      name: name,
      email: email,
      msg: msg
    };

    var test = {
      name: "Cena",
      email: "ceneto@cec.com",
      msg: "zdr ko pr"
    }

    baseForMsgs.contacts.push(curentContact);
    baseForMsgs.contacts.push(test);
    alert('hi');
  });
});
