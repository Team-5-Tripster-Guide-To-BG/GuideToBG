const ratingResult = (function() {

    function rating(currentRating) {
        let result = "";

        let positiveRating = currentRating;
        let negativeRating = 5 - currentRating;

        for (let i = 0; i < positiveRating; i += 1) {
            result += "<span class=\"fa fa-star checked\"></span>\n";
        }
        for (let i = 0; i < negativeRating; i += 1) {
            result += "<span class=\"fa fa-star\"></span>\n";
        }
        return `<div class="media" id="rating"><div class="media-left media-top displayStars">Rating: ${result}  </div></div>`;
    };

    return {
        rating : rating
    };
})();