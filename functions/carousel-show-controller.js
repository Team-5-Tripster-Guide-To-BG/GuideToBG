const showCarousel = function() {

    const html = function() {
        return ` <div id="myCarousel" class="carousel slide" data-ride="carousel">

                <!-- Indicators -->
                <ol class="carousel-indicators">
                    <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
                    <li data-target="#myCarousel" data-slide-to="1"></li>
                    <li data-target="#myCarousel" data-slide-to="2"></li>
                    <li data-target="#myCarousel" data-slide-to="3"></li>
                    <li data-target="#myCarousel" data-slide-to="4"></li>
                    <li data-target="#myCarousel" data-slide-to="5"></li>
                </ol>

                <!-- Wrapper for slides -->
                <div id="carousel-main-div" class="carousel-inner" role="listbox">
                    <div class="item active">
                        <img src="images/photo-Tarnovo-1.jpg" alt="Veliko Tarnovo">
                        <div class="carousel-caption">
                            <h3>Veliko Tarnovo</h3>
                            <p>Veliko Tarnovo - the old capital of Bulgaria is mesmerising.</p>
                        </div>
                    </div>
                    <div class="item">
                        <img src="images/photo-Tarnovo-2.jpg" alt="Veliko Tarnovo">
                        <div class="carousel-caption">
                            <h3>Veliko Tarnovo</h3>
                            <p>During the winter as well.</p>
                        </div>
                    </div>
                    <div class="item">
                        <img src="images/photo-Varna-1.jpg" alt="Varna">
                        <div class="carousel-caption">
                            <h3>Varna</h3>
                            <p>The sea capital of Bulgaria.</p>
                        </div>
                    </div>
                    <div class="item">
                        <img src="images/photo-Plovdiv-1.JPG" alt="Plovdiv">
                        <div class="carousel-caption">
                            <h3>Plovdiv</h3>
                            <p>Plovdiv is one of the oldest cities in the world.</p>
                        </div>
                    </div>
                    <div class="item">
                        <img src="images/photo-Plovdiv-2.jpg" alt="Plovdiv">
                        <div class="carousel-caption">
                            <h3>Plovdiv</h3>
                            <p>This magnificent theater still holds concerts.</p>
                        </div>
                    </div>
                    <div class="item">
                        <img src="images/photo-Plovdiv-3.jpg" alt="Plovdiv">
                        <div class="carousel-caption">
                            <h3>Plovdiv</h3>
                            <p>You can find a lot of history in this museum in the old city.</p>
                        </div>
                    </div>
                </div>

                <!-- Left and right controls -->
                <a class="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
                    <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="right carousel-control" href="#myCarousel" role="button" data-slide="next">
                    <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
            </div>

`;
    };

    return {
        html
    };
};
