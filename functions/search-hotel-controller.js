const searchHotelResult = function() {

    const html = function(searchResult) {

        return `<span><b>Name:</b> ${searchResult.name} <b>Address:</b> ${searchResult.address} <b>Telephone:</b> ${searchResult.telephone}</span><hr>`;

    };

    return {
        html
    };
};
