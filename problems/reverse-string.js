module.exports = function reverseString(string) {
  // Your code here
  // Make a array holder
  // For each chacracter in string
  //    Push it into array in reverse order
  // Return string join.
    
  if(typeof string !== "string") {
    throw new TypeError("Not a string")
  }

  return string.split("").reverse().join("");
};
