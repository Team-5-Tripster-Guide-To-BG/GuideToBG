(function () {

    $(document).ready(function(){
        $('#carousel-show').html(function () {
            const showCarouselController = showCarousel();

            return showCarouselController.html();
        })
    });

}());