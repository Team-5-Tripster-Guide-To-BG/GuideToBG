const showSearchArea = (function() {

    function html () {
        return ` <div class="container">
       <form class="form-horizontal" role="form">
            <div class="form-group">
                <label class="col-sm-4 control-label">Please select search criteria</label>
                <div class="col-sm-8">
                    <label class="radio-inline"> <input type="radio" name="criteria" id="search-city" value="clear" checked>City</label>
                    <label class="radio-inline"> <input type="radio" name="criteria" id="search-name" value="cloudy">Name</label>
                    <label class="radio-inline"> <input type="radio" name="criteria" id="search-rating" value="cloudy">Rating</label>
                </div>
            </div>           
        </form>
    </div>

<div class="container-fluid id="search-input-area">
                        <div class="col-sm-6">
                            <div class="input-group">
                                <input type="text" class="form-control" id ="hotel-search-input" placeholder="Search for hotels">
                                <span class="input-group-btn">
                                <button class="btn btn-default" type="button" id ="hotel-search-btn">Search!</button>
                                </span>
                            </div><!-- /input-group -->
                        </div><!-- /.col-lg-6 -->
                        <div class="col-sm-6">
                            <div class="input-group">
                                <input type="text" class="form-control" id="restaurant-search-input" placeholder="Search for restaurants">
                                <span class="input-group-btn">
                                <button class="btn btn-default" type="button" id ="restaurant-search-btn">Search!</button>
                                </span>
                            </div><!-- /input-group -->
                        </div><!-- /.col-lg-6 -->
                </div>

                <div class="container" id="results-container">
                    <div id="results"></div>
                </div>`;
    };

    return {
        html
    };
})();
