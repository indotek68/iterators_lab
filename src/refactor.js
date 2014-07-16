var myNumbers = [ -1, 2, -3, 4, -5, 6];

var square = function(num) {
    return num * num;
};

var sqrRoot = function(num) {
    return Math.sqrt(num);
};


var sqrNumbers = map(myNumbers, square);
var absNumbers = map(sqrNumbers, sqrRoot);