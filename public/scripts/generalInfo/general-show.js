(function () {
    $("#show-general-info").click(function(){
        $(this).text(function(i, text){
            if(text === "Show More"){
                $("#general-info-show-area").show();
            }
            else {
                $("#general-info-show-area").hide(1000);
            }
            return text === "Show More" ? "Show Less" : "Show More";
        })

    });

    $(document).on("click", "#show-general-info",  function() {
        $("#general-info-show-area").html(function () {
            const showGeneralInfoController = showGeneralInfo();

            return showGeneralInfoController.html();
        })
    });

}());