var moment = require("moment");

console.log(moment().format());

// Jan-01-1979 @ 12:00am
var now = moment();
console.log("Current timestamp:", now.unix());

var timestamp = 1484681721;
var currentMoment = moment.unix(timestamp);
console.log("Current moment:", currentMoment.format("MMM D, YYYY @ h:mm a"));

//January 3rd, 2017 @ 12:13 AM
console.log("Current moment:", currentMoment.format("MMMM Do, YYYY @ h:mm A"));
