// function getStudentsByLocation that returns an array of objects
// who are located in a specific city.
export default function getStudentsByLocation(students, city) {
  const cityStudents = students.filter((student) => student.location === city);
  return cityStudents;
}
