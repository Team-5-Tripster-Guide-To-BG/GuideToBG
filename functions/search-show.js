(function () {

    $(document).on('click', '#search-area',  function() {
        $('#search-area-showed').html(function () {
            const showSearchAreaController = showSearchArea();

            return showSearchAreaController.html();
        })
    });
}());

