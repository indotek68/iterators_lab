# Iterators Lab
## Functional Programming


### Description

In the iterators lab we will be continuing our exploration of iterators and building a few more useful methods. These methods will belong to an Iterators namespace, which we discussed in class. We also will try to use various testing methods to verify that our code is working. 


### Phase-1

Research the following term and summarize your findings on it two to three sentences:

* `higher-order function` - is a function that takes a function as an argument.


Pretending we implemented the following methods, update this README with a description of each of the following and an example you've created:


* `max` - should return the max in an array and infinity in an empty array. If you have a range of values in an array you can find the highest number in the array using 'max.'
* `min` - returns the lowest value of the array. If you have a range of values in an array, you can find the lowest number in the array using 'min.' 
* `each`- each iterator goes through each item in the array. An example would be returning the values of the array using console.log.
* `map` - it creates a new array by taking a function and passing it with the original array. An example would be: if  I created a function that returns (num + 1) and passed it to the original array of [1, 2, 3], a new array would ouput [2, 3, 4].
* `filter`: [note](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter) - filter only returns the item in the array which the function calls to be true. Example: if I generated an array of [2, 4, 10] and a function was called to return (num<10), then a new array would return [2, 4].
* `reduce`: [note](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce) - reduces all the items in the array to a single value. Example: If I had an array of integers and passed an arithmetic function to add all the numbers, it would create an array with a single value of the sum of all integers in a new array.
* `reject`: [note](http://underscorejs.org/#reject) - it is the opposite of the filter iterator, the numbers lying outside of whatever condition you specify. Example: if I generated an array with a range of intergers [1,2,11,12] and I passed in a function(num<10), it would spit out the numbers that are greater than 10, [11,12]

Use the notes provided to help guide you explanation.




### Phase-2 

* Write a test in the `test` folder for `min` and implement it in the `src/iterators.js` folder. There is a test for a `max` method already if you'd like to use that as inspiration. 

* Re-implement the `each` function we did in class, but write the spec for it first. Continue this exercise with `map` and `filter`.


### Phase-3

Implement the remaining iterator methods in the namespace.


### Phase-4

Refactor the following code using `map` to make only one call to the `map` function versus the two below.


```
var myNumbers = [ -1, 2, -3, 4, -5, 6];

var square = function(num) {
	return num * num;
};

var sqrRoot = function(num) {
	return Math.sqrt(num);
};


var sqrNumbers = map(myNumbers, square);
var absNumbers = map(sqrNumbers, sqrRoot);
```




