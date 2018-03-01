(function () {

    $(document).ready(function(){
        $("#show-tripsters-info").html(function () {
            const showTripstersInfoController = showTripstersInfo();

            return showTripstersInfoController.html();
        })
    });

}());