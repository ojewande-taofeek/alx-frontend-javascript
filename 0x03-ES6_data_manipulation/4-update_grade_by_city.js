export default function updateStudentGradeByCity(students, city, newGrades) {
  return students.filter((student) => student.location === city )
    .map((student) => {
        const exactStudent = newGrades.find((newG) => student.id === newG.studentId);
        if (exactStudent && exactStudent.grade) {
            student.grade = exactStudent.grade;
        } else {
            student.grade = 'N/A';
        }
        return student;
    });
}
