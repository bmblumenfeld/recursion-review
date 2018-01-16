// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className, node) {
  // your code here
  var output = [];
  node = node || document.body;
  if (node.classList) {
    if (node.classList.contains(className)) {
      output.push(node);
    }
  } 
  for (var i = 0; i < node.childNodes.length; i++) {
    var child = getElementsByClassName(className, node.childNodes[i]);
    output = output.concat(child);
  }
  return output;
};

// document.body, element.childNodes, and element.classList
//input : documentbody that contains elements and their node families 
// output : 