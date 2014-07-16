
var Iterators = (function() {
  var api = {
    max: function(numList){
      var max = -Infinity;
      for (var i = 0; i < numList.length; i++) {
        if ( numList[i] > max ) {
          max = numList[i];
        }
      };
      return max;
    },
    min: function(numList){
      var smallest = Infinity;
      for (var i = 0; i < numList.length; i++) {
        if(numList[i] < smallest){
          smallest = numList[i];
        }
      }
      return smallest;
    },

    each: function(numList, action){
      for (var i = 0; i < numList.length; i++) {
        action(numList[i], i)
      };
      return numList
    },

    map: function(numList, action){
      var newArray = [];
      for (var i = 0; i < numList.length; i++) {
        var result = action(numList[i])
        newArray.push(result)
      };
      return newArray;
      //console.log(newArray)
    },

    filter: function(numList, action){
      var newArray = [];

      for (var i = 0; i < numList.length; i++) {
        if(action(numList[i])){
          newArray.push(numList[i]);
        }  
      };
      return newArray;
    },

    reject: function(numList, action){
      var newArray = [];

      for (var i = 0; i < numList.length; i++) {
        if (!action(numList[i])){
          newArray.push(numList[i]);
        }
      };
      return newArray;
    },

    reduce: function(numList, action){
      var previousNum = null;

      for (var i = 0; i < numList.length; i++) {
          previousNum = action(previousNum, numList[i])
      };
      return previousNum;
    }

  }


  return api;
})();

module.exports = Iterators;