export default function getListStudentIds(obj) {
  if (Array.isArray(obj)) {
    return obj.map((element) => element.id);
  }
  return [];
}
