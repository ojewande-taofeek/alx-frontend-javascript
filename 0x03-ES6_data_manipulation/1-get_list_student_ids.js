// function getListStudentIds that returns an array of ids from a list of object.
// using map
export default function getListStudentIds(anArray) {
  if (Array.isArray(anArray)) {
    const mappedArray = anArray.map((element) => element.id)
    return mappedArray;
  } else {
    return []
  }
}
