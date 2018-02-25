const database = (function () {

    function getActivity(name) {

        return new Promise((res, rej) => {

            $.getJSON("../public/data/useful-tips-data.json", function (data) {

                if(name === "arrival"){
                    res (data.arrival);
                } else if (name === "subway"){
                    res (data.subway);
                } else if(name === "taxi"){
                    res (data.taxi);
                } else if(name === "timezone"){
                    res (data.timezone);
                } else if(name === "currency"){
                    res (data.currency);
                } else if(name === "plugstandart"){
                    res (data.plugstandart);
                } else if(name === "creditcard"){
                    res (data.creditcard);
                } else if(name === "restaurants"){
                    res (data.restaurants);
                } else if(name === "bars"){
                    res (data.bars);
                } else if(name === "party"){
                    res (data.party);
                } else if(name === "shopping"){
                    res (data.shopping);
                } else {
                    rej(alert("Invalid activity name"))
                }

            });
        });
    }
    return{
        getActivity
    }
})();

