// 4. Map an array of timestamps to formatted time strings.
// Input:
// [1630488000000, 1631179200000, 1633708800000]
// Output:
// ['2:50:00 PM', '2:50:00 PM', '9:30:00 PM']

let timestamps = [1630488000000, 1631179200000, 1633708800000];
let formattedTimes = timestamps.map((ts) => new Date(ts).toLocaleTimeString());

console.log(formattedTimes);
