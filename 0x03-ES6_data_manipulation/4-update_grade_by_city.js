export default function updateStudentGradeByCity(students, city, newGrades) {
  if (Array.isArray(students) && typeof city === 'string' && Array.isArray(newGrades)) {
    return students.filter((student) => student.location === city)
      .map((student) => {
        const stud = newGrades.filter((newStd) => newStd.studentId === student.id);
        console.log(stud);
        if (stud.length === 1) {
          return { ...student, grade: stud[0].grade };
        }
        return { ...student, grade: 'N/A' };
      });
  }
  return [];
}
