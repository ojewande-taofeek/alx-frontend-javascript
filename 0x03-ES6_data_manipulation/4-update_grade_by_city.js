export default function updateStudentGradeByCity(students, city, newGrades) {
  return students.filter((student) => student.location === city)
    .map((student) => {
      const exactStd = newGrades.find((newG) => student.id === newG.studentId);
      return { ...student, grade: exactStd && exactStd.grade ? exactStd.grade : 'N/A' };
    });
}
