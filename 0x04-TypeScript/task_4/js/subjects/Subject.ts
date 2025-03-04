/// <reference path='./Teacher.ts' />

namespace Subjects {
  export class Subject {
    teacher: Teacher;
    set setTeacher(val: Teacher) {
        this.teacher = val;
    }
  }
}
