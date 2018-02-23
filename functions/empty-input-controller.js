const emptyInput = function() {

    const html = function() {

        return `<div class="row">
    <div class="col s12 m6">
        <div class="card blue-grey darken-1">
          <div class="card-content white-text">
            <span class="card-title">Please enter at least one character in order to search!</span>
          </div>          
        </div>
      </div>
    </div>`;
    };

    return {
        html
    };
};
