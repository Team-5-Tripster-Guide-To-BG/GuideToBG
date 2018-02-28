const generalInfoJSON = '{"generalInfo":"Bulgaria, officially the Republic of Bulgaria, is a country in southeastern Europe. It is bordered by Romania to the north, Serbia and Macedonia to the west, Greece and Turkey to the south, and the Black Sea to the east. Bulgaria is Europe\'s 16th-largest country."}';

$("#general-info-text").html(JSON.parse(generalInfoJSON).generalInfo);

$(".general-info-container").on("click", "#show-general-info", function () {

    dbGeneralInfo.getGeneralInfo().then(function (data) {
        $(".infoPopulationTitle").html(data.infoPopulation.title);
        $(".infoPopulation").html(data.infoPopulation.text);
        $(".infoHistoryTitle").html(data.infoHistory.title);
        $(".infoHistory").html(data.infoHistory.text);
        $(".infoTourismTitle").html(data.infoTourism.title);
        $(".infoTourism").html(data.infoTourism.text);
    });
});