var myNumbers = [ -1, 2, -3, 4, -5, 6];

var square = function(num) {
    return num * num;
};

var sqrRoot = function(num) {
    return Math.sqrt(num);
};


var sqrNumbers = map(myNumbers, square);
var absNumbers = map(sqrNumbers, sqrRoot);

//////////// refactor /////////////////////

var myNumbers = [ -1, 2, -3, 4, -5, 6];

var square = myNumbers.map(function(num) {
    return num * num;
});

var sqrRoot = myNumbers.map(function(num) {
    return Math.sqrt(num);
});


console.log("This is the square: " + square + " and this is the sqrt: " + sqrRoot);