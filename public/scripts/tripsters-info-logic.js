var tripstersInfoJSON = '{"tripstersInfo":"Tripster: Tripster is a travel hipster. Someone who is so over the mainstream tourist destinations and they only prefer to go to the bleakest, most obsucure regions of the planet. That being said we will be your tripster guides to discover one of the most obscure places of the planet - our home, Bulgaria."}';
var strTripstersInfoJSON = JSON.parse(tripstersInfoJSON);

document.getElementById("tripsters-info-text").innerHTML = strTripstersInfoJSON.tripstersInfo;