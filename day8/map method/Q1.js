// 1. Map an array of prices to formatted currency strings with dollar sign
// Input:
// [15.99, 29.5, 7.25]
// Output:
// ['$15.99', '$29.50', '$7.25']

let prices = [15.99, 29.5, 7.25];
let formattedPrices = prices.map((price) => `$${price.toFixed(2)}`);

console.log(formattedPrices);
