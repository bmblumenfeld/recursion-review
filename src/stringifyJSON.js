// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  
  if (typeof obj === 'function' || undefined) {
    return undefined;
  } else if (obj === null) {
          return '' + null;
    } else if (Array.isArray(obj)) {
        if (obj.length === 0) {
          return '[' + ']'; 
        }
        return '[' + obj.reduce(function(acc, element) {
          acc.push(stringifyJSON(element));
          return acc;
        }, []) + ']';
      } else if (typeof obj === 'object') {
          var stringyObj = '{';
          for (var key in obj) {
             // if (Object.keys(obj)[Object.keys(obj).length-1] === key) {
             //   stringyObj += '\"' + key + '\"' + ':' + stringifyJSON(obj[key])
             // }
            stringyObj += '\"' + key + '\"' + ':' + stringifyJSON(obj[key]) + ',';
          }
          // if (obj.length === undefined) {
          //   return '{' + '}';
          // }
//Start here 
          stringyObj.slice(0,stringyObj-2);
          return stringyObj + '}'; 

         }else if (typeof obj === 'string') {
            return '"' + obj + '"';
          } else if (typeof obj === 'number') {
            return "" + obj;
          } else if (typeof obj === 'boolean') {
            return '' + obj;
          }
      // obj.reduce(function(acc, element){stringify; add to our acc},'')
      // return [ + reduce function + ] 
        // reduce to a string
        // ""
      // if element is the last element of the array we call without the , 
      // for each element
      // bring to recursive case
      // bring to base case
};

// i = data type
  // number, boolean, object, undefined, null, string
  // unstringifiable = function
  // get to pass for data types
  // pay attention to nested data structures
// o = stylized JSON string based on the passed in object

// base case = analyzes and interprets data type and stringifys the input 
// recursive case = sequence of conditional statements that satisfies all data types and nested data types
  // we have specific inputs and outputs per data type within our larger parent function
  // uses the smaller conditionals to create usable data for the larger parent function

// these are areas we need to identify to clarify our specific passed in data type
// string = typeof 
// number = typeof
// null === null
// boolean = typeof
// *array = Array.isArray(obj)
// object = typeof
// *undefined === undefined
// *function = typeof