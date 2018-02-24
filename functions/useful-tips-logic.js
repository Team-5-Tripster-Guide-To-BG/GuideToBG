function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}

$(".useful-tips-tab").on("click", ".tablinks", function () {
    let $this = $(this);
    let elName = $this.attr("data-activity");
    let elElName = "." + elName;

    database.getActivity(elName).then(function (data) {
        $(elElName).html(data);
    });
});
