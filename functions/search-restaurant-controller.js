const searchRestaurantResult = function() {

    const html = function(searchResult) {

        return `<div class="row">
    <div class="col s12 m6">
        <div class="card blue-grey darken-1">
          <div class="card-content white-text">
            <span class="card-title">${searchResult.name}</span>
            <p>${searchResult.telephone}</p>
          </div>
          <div class="card-action">
            <a>${searchResult.regularPricePerGuest}</a>            
          </div>
        </div>
      </div>
    </div>`;
    };

    return {
        html
    };
};
