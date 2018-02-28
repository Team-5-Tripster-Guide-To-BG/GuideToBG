function saveForm() {
    let name = $("#name").val();
    let email = $("#email").val();
    let msg = $("#message").val();

    let curentContact = {
      name: name,
      email: email,
      msg: msg
    };

    cotactDatabaseFunction.contacts.push(curentContact);
  }
