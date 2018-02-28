const databaseFunction = (function() {

    function hotels() {
        return [
            {
                id: 0,
                name: 'Cherno more',
                rating: 5,
                address: '12 Vuzrajdane str.',
                city: 'Varna',
                telephone: '+359 0101010101',
                regularPricePerGuest: 100,
            },
            {
                id: 1,
                name: 'Vitosha',
                rating: 3,
                address: '1 Vitosha str.',
                city: 'Sofia',
                telephone: '+359 0101010101',
                regularPricePerGuest: 200,
            },
            {
                id: 2,
                name: 'Maritza towers',
                rating: 4,
                address: '121 Ailqk str.',
                city: 'Plovdiv',
                telephone: '+359 0101010101',
                regularPricePerGuest: 150,
            },
            {
                id: 3,
                name: 'Maritza',
                rating: 4,
                address: '122 Ailqk str.',
                city: 'Plovdiv',
                telephone: '+359 0101010101',
                regularPricePerGuest: 150
            }
        ]
    };

    function restaurants() {
        return [
            {
                id: 1,
                name: 'Ribarska sreshta',
                rating: 5,
                address: '9 8-mi primorski polk str.',
                city: 'Varna',
                telephone: '+359 0101010101',
                regularPricePerGuest: 10
            },
            {
                id: 2,
                name: 'Vitosha',
                rating: 4,
                address: '99 Batka str.',
                city: 'Sofia',
                telephone: '+359 0202020202',
                regularPricePerGguest: 20
            },
            {
                id: 3,
                name: 'Trimontzium',
                rating: 3,
                address: '999 Maina str.,',
                city: 'Plovdiv',
                telephone: '+359 03030300033',
                regularPricePerGuest: 15
            }
        ]
    }


    return {
        restaurants,
        hotels
    };
})();