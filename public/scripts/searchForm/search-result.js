(function () {
    $(document).on("click", "#hotel-search-btn",  function() {
        const currentSearchValue = $("#hotel-search-input").val().toLowerCase();
        $("#results").empty();

        if(currentSearchValue.length === 0){
            $("#results").html(function () {

                return searchResult.emptyInput();
            })}

        else {
            let filteredResults;
            if($("#search-city").is(":checked")) {
                filteredResults = databaseFunction.hotels().filter(f => f.city.toLowerCase().indexOf(currentSearchValue) >= 0);
            } else if($("#search-name").is(":checked")) {
                filteredResults = databaseFunction.hotels().filter(f => f.name.toLowerCase().indexOf(currentSearchValue) >= 0);
            } else if($("#search-rating").is(":checked")) {
                filteredResults = databaseFunction.hotels().filter(f => f.rating == currentSearchValue);
            }

            if(filteredResults.length > 0){

                for(let currentResult of filteredResults) {
                    let node = $("<div>");
                    node.append(ratingResult.rating(currentResult.rating));
                    node.append(searchResult.successfulResult(currentResult));
                    $("#results").append(node);
                }
            }

            else
            {
                $("#results").html(function () {
                    return searchResult.noResult();
                })
            }
        }

    });
    $(document).on("click", "#restaurant-search-btn",  function() {

        const currentSearchValue = $("#restaurant-search-input").val().toLowerCase();
        $("#results").empty();

        if(currentSearchValue.length === 0){
            $("#results").html(function () {
                return searchResult.emptyInput();
            })}

        else {
            let filteredResults;

            if($("#search-city").is(":checked")) {
                filteredResults = databaseFunction.restaurants().filter(f => f.city.toLowerCase().indexOf(currentSearchValue) >= 0);
            } else if($("#search-name").is(":checked")) {
                filteredResults = databaseFunction.restaurants().filter(f => f.name.toLowerCase().indexOf(currentSearchValue) >= 0);
            } else if($("#search-rating").is(":checked")) {
                filteredResults = databaseFunction.restaurants().filter(f => f.rating == currentSearchValue);
            }
            if(filteredResults.length > 0) {


                for(let currentResult of filteredResults) {
                    let node = $("<div>");
                    node.append(ratingResult.rating(currentResult.rating));
                    node.append(searchResult.successfulResult(currentResult));
                    $("#results").append(node);
                }
            }

            else
            {
                $("#results").html(function () {
                    return searchResult.noResult();
                })
            }
        }
    });
})();

