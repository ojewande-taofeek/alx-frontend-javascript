export default function iterateThroughObject(reportWithIterator) {
  const appendString = ' | ';
  let string = '';
  reportWithIterator.forEach((value, idx) => {
    if (idx !== reportWithIterator.length - 1) {
      string += value + appendString;
    } else {
      string += value;
    }
  });
  return string;
}
