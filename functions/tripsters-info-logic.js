var tripstersInfoJSON = '{"tripstersInfo":"Lorem ipsum"}';
var strTripstersInfoJSON = JSON.parse(tripstersInfoJSON);

document.getElementById("tripsters-info-text").innerHTML = strTripstersInfoJSON.tripstersInfo;