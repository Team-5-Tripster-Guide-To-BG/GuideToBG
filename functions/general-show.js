(function () {

    $(document).on('click', '#show-general-info',  function() {
        $('#general-info-show-area').html(function () {
            const showGeneralInfoController = showGeneralInfo();

            return showGeneralInfoController.html();
        })
    });

}());