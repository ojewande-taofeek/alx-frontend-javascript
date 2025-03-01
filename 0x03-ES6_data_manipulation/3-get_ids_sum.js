export default function getStudentIdsSum(obj) {
  let id = 0;
  if (Array.isArray(obj)) {
    id = obj.map((element) => element.id);
    return id.reduce((acc, currentValue) => acc + currentValue);
  }
  return id;
}
