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
    const name = $("#name").val();
    const email = $("#email").val();
    const msg = $("#message").val();

    const curentContact = {
      name: name,
      email: email,
      msg: msg
    };

    const test = {
      name: "Cena",
      email: "ceneto@cec.com",
      msg: "zdr ko pr"
    }

    baseForMsgs.contacts.push(curentContact);
    baseForMsgs.contacts.push(test);
    alert('hi');
  });
});
