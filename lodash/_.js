
var _ = {
  clamp(number, lower, upper) {
    var lowerClampedValue = Math.max(number, lower);
    var clampedValue = Math.min(lowerClampedValue, upper);
    
    return clampedValue;
  },
  inRange(number, start, end) {
    var endNum = end;
    var startNum = start;
    
    if (startNum > endNum) {
      var startTemp = startNum;
      var endTemp = endNum;
      
      endNum = startTemp;
      startNum = endTemp;
     
    } else if (endNum === undefined) {
      	endNum = startNum;
        startNum = 0;
      
    }
   var isInRange = Boolean(number >= startNum && number <= endNum);
   return isInRange;
  },
  words(string) {
    var words = string.split(' ');
    return words;
  },
  pad(string, padding) {
    var paddedString = string;
    const stringLength = string.length;
    var totalPadding = padding - string.length;
    var padLeft = Math.floor((totalPadding / 2));
    var padRight = Math.ceil(totalPadding / 2);
    const padUnit = ' ';

    if (stringLength >= padding) {
      return string;
    } else {
      paddedString = padUnit.repeat(padLeft) + paddedString;
      paddedString = paddedString + padUnit.repeat(padRight);
      return paddedString;
    }
  },
  has(object, key) {
    return Boolean(object[key] != undefined)
  },
  invert(object) {
    objectEntries = Object.entries(object);
    newObject = {};
  
    objectEntries.forEach(function(item) {
      var temp = item[1];

      item[1] = item[0];
      item[0] = temp;
      
      newObject[item[0]] = item[1];
    })
    
  	return newObject;
    
  },
  findKey(object, predicate) {
  for (key in object) {
        let value = object.key;
        let returnedValue = predicate(value);

        if (predicate(value) === true) {
          return key;
        } else 
          return undefined;
      }
    },
  drop(arr, num) {
    newArray = arr;

    if (num === undefined) {
      newArray.splice(0,1);
    } else {
    	newArray.splice(0,num); 
    }
    return newArray;
  }, 
  dropWhile(array, predicate) {
 		var dropNumber = array.findIndex(function(element, index) {
      return !predicate(element, index, array);
    });
    
    var droppedArray = this.drop(array, dropNumber);
    return droppedArray
  },
  chunk(array, size) {
    var chunkSize = size;
    var oldArray = array;
    var newArray = [];
    timesToChunk = Math.ceil(array.length / size);
    
		if (size === undefined) {
      chunkSize = 1;
    }
    for (i=0; i < timesToChunk; i++) {
      newArray.push(oldArray.slice(0, chunkSize));
      oldArray.splice(0, chunkSize);
    } 
    return newArray;
  }
  
}




// Do not write or modify code below this line.
module.exports = _;