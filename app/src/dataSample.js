const data = {
    exchanges: 
    [
        {
            name: "SPY",
            price: 420.04,
            change: 0.74,
        },
        {
            name: "QQQ",
            price: 320.04,
            change: 0.64,
        },
        {
            name: "IWM",
            price: 220.04,
            change: 0.74,
        },
        {
            name: "IBB",
            price: 120.04,
            change: 0.74,
        }
    ],
    stocks: [
        {
            name: "Apple",
            ticker: "AAPL",
            bid: 120.11,
            ask: 120.14,
            sector: "Tech",
            dividends: {
                2021: 2,
                2020: 1,
                2019: 1
            }
        },{
            name: "HomeDepot",
            ticker: "HD",
            bid: 140.21,
            ask: 140.24,
            sector: "Tech",
            dividends: {
                2021: 5,
                2020: 7,
                2019: 9
            },
            name: "Ford",
            ticker: "F",
            bid: 40.21,
            ask: 40.24,
            sector: "Tech",
            dividends: {
                2021: 3,
                2020: 7,
                2019: 9
            }
        }
    ]
}

export default data;

/*
data sample file so later we attach backend data

this file just contains data we need to visualize for frontend, so we can build our
front end components and then we can just swap it out with an api later. We can build
our components to exactly like we would expect them to get data from an API
*/


/*
data is an object with an exchange property that has array of objects

exchanges: for component containing information of indexs
stocks: an array of objects that has data for component 
*/