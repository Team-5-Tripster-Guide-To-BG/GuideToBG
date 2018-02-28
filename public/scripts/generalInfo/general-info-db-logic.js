const dbGeneralInfo = (function () {

    function getGeneralInfo() {

        return new Promise((res, rej) => {

            $.getJSON("./data/general-info-data.json", function (data) {
            res(data.categories);
        });
    });
    }
    return{
        getGeneralInfo
    }
})();
