// Array need to be sorted
function binarySearch(numArray, key) {
  let middleIndex = Math.floor(numArray.length / 2);
  let middleEl = numArray[middleIndex];

  if (middleEl === key) {
    return true;
  } else if (middleEl < key && numArray.length > 1) {
    return binarySearch(numArray.splice(middleIndex, numArray.length), key);
  } else if (middleEl > key && numArray.length > 1) {
    return binarySearch(numArray.splice(0, middleIndex), key);
  } else {
    return false;
  }
}

console.log(binarySearch([5, 7, 12, 16, 36, 39, 42, 59, 71], 56));
