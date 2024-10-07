/*
function getStudentIdsSum that returns the sum of all the student ids.

It should accept a list of students (from getListStudents) as a parameter.

You must use the reduce function on the array.
*/

export default function getStudentIdsSum(students) {
  const idSum = students.reduce((accum, student) => accum + student.id, 0);
  return idSum;
}