export default function cleanSet(set, startString) {
  let text = '';
  if (startString) {
    for (const element of set) {
      if (element.startsWith(startString)) {
        const newElement = element.slice(startString.length);
        text += `${newElement}-`;
      }
    }
    if (text.endsWith('-')) {
      text = text.slice(0, -1);
    }
  }
  return text;
}
