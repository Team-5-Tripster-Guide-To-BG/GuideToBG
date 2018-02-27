const searchResult = (function() {

    function successfulResult(searchResult) {

        return `<span><b>Name:</b> ${searchResult.name} <b>City:</b> ${searchResult.city} <b>Address:</b> ${searchResult.address} <b>Telephone:</b> ${searchResult.telephone}</span><hr>`;

    };
    function noResult() {

        return "<span>No results found!</span><hr>";
    };
    function emptyInput() {

        return "<span>Please enter at least one character in order to search!</span><hr>";
    };
    return {
        successfulResult : successfulResult,
        noResult : noResult,
        emptyInput : emptyInput
    };
})();
