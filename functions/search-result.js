function init(db) {
    const data = db();

    $(document).on('click', '#hotel-search-btn',  function() {
        var inputValue = document.getElementById("hotel-search-input");
        var currentRating = document.getElementById("results");
        while (currentRating.firstChild) {
            currentRating.removeChild(currentRating.firstChild);
        }
        var currentValue = inputValue.value.toString();
        if(currentValue.length === 0){
            $('#results').html(function () {
                const emptyInputController = emptyInput();

                return emptyInputController.html();
        })}

        else {
            var filteredResults;
            if(document.getElementById("search-city").checked) {
                filteredResults = data.hotels.filter(f => f.city.indexOf(currentValue) >= 0);
            } else if(document.getElementById("search-name").checked) {
                filteredResults = data.hotels.filter(f => f.name.indexOf(currentValue) >= 0);
            } else if(document.getElementById("search-rating").checked) {
                filteredResults = data.hotels.filter(f => f.rating == currentValue);
            }

            if(filteredResults.length > 0){
                const searchController = searchResult();
                const ratingController = ratingResult();

                for(var currentResult of filteredResults) {
                    var node = $("<div>");
                    node.append(ratingController.html(currentResult));
                    node.append(searchController.html(currentResult));
                   $('#results').append(node);
                }
            }

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
        var inputValue = document.getElementById("restaurant-search-input");
        var currentRating = document.getElementById("results");
        while (currentRating.firstChild) {
            currentRating.removeChild(currentRating.firstChild);
        }
        var currentValue = inputValue.value;
        if(currentValue.length === 0){
            $('#results').html(function () {
                const emptyInputController = emptyInput();

                return emptyInputController.html();
            })}

        else {
            var filteredResults;
            if(document.getElementById("search-city").checked) {
                filteredResults = data.restaurants.filter(f => f.city.indexOf(currentValue) >= 0);
            } else if(document.getElementById("search-name").checked) {
                filteredResults = data.restaurants.filter(f => f.name.indexOf(currentValue) >= 0);
            } else if(document.getElementById("search-rating").checked) {
                filteredResults = data.restaurants.filter(f => f.rating == currentValue);
            }
            if(filteredResults.length > 0) {
                const searchController = searchResult();
                const ratingController = ratingResult();

                for(var currentResult of filteredResults) {
                    var node = $("<div>");
                    node.append(ratingController.html(currentResult));
                    node.append(searchController.html(currentResult));
                    $('#results').append(node);
                }
            }

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