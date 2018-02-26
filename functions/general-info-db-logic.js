const dbGeneralInfo = (function () {

    function getActivity() {

        return new Promise((res, rej) => {

            $.getJSON("../public/data/general-info-data.json", function (data) {
                res(data.categories);
            });
        });
    }
    return{
        getActivity
    }
})();

