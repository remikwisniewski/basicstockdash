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
                2020: 2,
                2019: 1,
                2018: 1
            }
        }
    ]
}

export default data;
