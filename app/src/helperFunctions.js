export const sortDivStocks = (stocks) => {
    const date = new Date();

    const year = date.getFullYear();

    const sorted = stocks.sort((stockA, stockB) => {
        return stockB.dividends[year] - stockA.dividends(year);
    });

    return sorted.slice(0,5);
};

/*
sortDivStocks takes in array of objects of stocks from dataSample.js to sort it
- the data is sorted by who has largest dividend yield in the current year

.getFullYear()- assigns the four-digit value of the current year to the variable year
*/