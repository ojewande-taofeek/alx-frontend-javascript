export default function cleanSet(set, startString) {
  if (!startString || typeof startString !== 'string' || !(set instanceof Set)) {
    return '';
  }
  // converted the set to an array
  return [...set]
    .filter((element) => element.startsWith(startString))
    .map((element) => element.slice(startString.length))
    .join('-');
}
