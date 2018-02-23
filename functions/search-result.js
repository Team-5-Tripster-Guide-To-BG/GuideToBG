function init(db) {
    const data = db();

    $(document).on('click', '#hotel-search-btn',  function() {
        var x = document.getElementById("hotel-search-input");
        var currentValue = x.value;
        if(currentValue.length === 0){
            $('#results').html(function () {
                const emptyInputController = emptyInput();

                return emptyInputController.html();
        })}

        else {
            const filteredResults = data.hotels.filter(f => f.name.indexOf(currentValue) >= 0);
            if(filteredResults.length > 0){
                $('#results').html(filteredResults.map(m => {
                const searchController = searchHotelResult();

                return searchController.html(m);
            }))}

            else
            {
                $('#results').html(function () {
                    const resultsController = noResult();

                    return resultsController.html();
                })
            }
        }

    });
    $(document).on('click', '#restaurant-search-btn',  function() {
        var x = document.getElementById("restaurant-search-input");
        var currentValue = x.value;
        if(currentValue.length === 0){
            $('#results').html(function () {
                const emptyInputController = emptyInput();

                return emptyInputController.html();
            })}

        else {
            const filteredResults = data.restaurants.filter(f => f.name.indexOf(currentValue) >= 0);
            if(filteredResults.length > 0){
                $('#results').html(filteredResults.map(m => {
                    const searchController = searchRestaurantResult();

                return searchController.html(m);
            }))}

            else
            {
                $('#results').html(function () {
                    const resultsController = noResult();

                    return resultsController.html();
                })
            }
        }

    });
};

init(databaseFunction);