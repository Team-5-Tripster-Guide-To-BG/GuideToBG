(function () {

    $(document).on('click', '#search-area',  function() {
        var currentSearchElements = document.getElementById("search-area-showed");
        if(currentSearchElements.firstChild){
            while (currentSearchElements.firstChild) {
                currentSearchElements.removeChild(currentSearchElements.firstChild);
            }
        }
        else {
            $('#search-area-showed').html(function () {
                const showSearchAreaController = showSearchArea();

                return showSearchAreaController.html();
            })}
    });
}());

