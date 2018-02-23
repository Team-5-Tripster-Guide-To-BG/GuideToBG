const ratingResult = function() {

    const html = function(searchResult) {
        var result = "";

        var positiveRating = searchResult.rating;
        var negativeRating = 5 - searchResult.rating;

        for (var i = 0; i < positiveRating; i += 1) {
            result += "<span class=\"fa fa-star checked\"></span>\n";
        }
        for (var i = 0; i < negativeRating; i += 1) {
            result += "<span class=\"fa fa-star\"></span>\n";
        }
        return `<div class="media" id="rating"><div class="media-left media-top displayStars">Rating: ${result}  </div></div>`;
    };

    return {
        html
    };
};
