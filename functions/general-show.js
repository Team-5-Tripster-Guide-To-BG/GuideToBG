(function () {
    $("#show-general-info").click(function(){
        $("#general-info-show-area").toggle();
    });
    $(function(){
        $("#show-general-info").click(function () {
            $(this).text(function(i, text){
                return text === "Show More" ? "Show Less" : "Show More";
            })
        });
    })
    $(document).on('click', '#show-general-info',  function() {
        $('#general-info-show-area').html(function () {
            const showGeneralInfoController = showGeneralInfo();

            return showGeneralInfoController.html();
        })
    });

}());