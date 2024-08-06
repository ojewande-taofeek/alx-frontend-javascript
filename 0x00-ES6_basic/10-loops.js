export default function appendToEachArrayValue(array, appendString) {
    let counter = 0;
  for (const value of array) {
    let elem = appendString + value;
    array[counter] = elem;
    counter++;
  }

  return array;
}
