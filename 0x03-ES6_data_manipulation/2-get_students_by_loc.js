export default function getStudentsByLocation(obj, city) {
  if (Array.isArray(obj) && typeof city === 'string') {
    return obj.filter((element) => element.location === city);
  }
  return [];
}
