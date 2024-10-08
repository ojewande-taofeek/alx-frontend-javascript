export default function updateUniqueItems(theMap) {
  if (theMap instanceof Map) {
    for (const [key, value] of theMap) {
      if (value === 1) {
        theMap.set(key, 100);
      }
    }
    return theMap;
  }
  throw Error('Cannot process');
}
