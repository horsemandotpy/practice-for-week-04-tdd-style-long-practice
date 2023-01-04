function myMap(inputArray, callback) {
  // Your code here
  // Take an array, return new callback(array)
  // The function should not mutate old array
  const newArray = [];
  for (let i = 0; i < inputArray.length; i++) {
    let newElement = callback(inputArray[i]);
    newArray.push(newElement);
  }
  return newArray;
}

module.exports = myMap;
