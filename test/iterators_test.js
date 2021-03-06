var expect = require('chai').expect,
  Iterators = require('../src/iterators.js');

describe('Iterators', function(){
  describe('#max', function(){
    var myArr;
    beforeEach(function(){
      myArr = [66,22,67, 34];
    });
    it('should return the maximum in an array', function(){
      expect(Iterators.max(myArr)).to.equal(67);
    })    
    it('should return -Infinity for empty array', function(){
      myArr = [];
      expect(Iterators.max(myArr)).to.equal(-Infinity);
    })
  })

  describe("#min", function() {
    it("should find the smallest item in the array", function(){
      //expect(true).to.equal.(false);
      expect(Iterators.min([7, 3, 21])).to.equal(3);
    });
  });

  describe("#each", function(){
    var x = 0;
    var myArr = [1,2,3,4]
    
    it("should call a function on each item in an array and return the original array", function(){
      Iterators.each(myArr, function(curr, index){
        x += curr;
      });
      expect(x).to.equal(10);
    });
  });

  describe("#map", function(){
    var array1 = [1,2,3,4]

    it("should create a new array that doubles the value of array1", function(){
      var result = Iterators.map(array1, function(taco){
        return taco * 2;
      })
      expect(result).to.deep.equal([2,4,6,8])
      //expect(true).to.equal(false);
    });
  })

  describe("#filter", function(){
    var array1 = [1,2,3,4];

    it("should copy true values from the original array", function(){
      var result = Iterators.filter(array1, function(taco){
        return taco < 3;
      })
      expect(result).to.deep.equal([1,2]);
    });
  })

  describe("#reject", function(){
    var array1 = [1,2,3,4];

    it("should copy false values from the original array", function(){
      var result = Iterators.reject(array1, function(taco){
        return taco < 3;
      })
      expect(result).to.deep.equal([3,4]);
    });
  })
  
  describe("#reduce", function(){
    var array1 = [1, 2, 3, 4];

    it("should sum up all the values in the array and return one integer", function(){
      var result = Iterators.reduce(array1, function(taco, foo){
        return (taco - foo);
      })
      expect(result).to.equal(-8);
    })
  })  
});

