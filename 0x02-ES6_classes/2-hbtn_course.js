export default class ALXCourse {
  constructor(name, length, students) {
    if (typeof name !== 'string') {
      throw TypeError('Name must be a string');
    }
    if (typeof length !== 'number') {
      throw TypeError('Length must be a number');
    }
    if (!Array.isArray(students)) {
      throw TypeError('Students must be an array of string');
    }
    this._name = name;
    this._length = length;
    this._students = students;
  }

  get name() {
    return this._name;
  }

  set name(val) {
    if (typeof val === 'string') {
      this._name = val;
    } else {
      throw TypeError('Name must be a string');
    }
  }

  get length() {
    return this._length;
  }

  set length(val) {
    if (typeof val === 'number') {
      this._length = val;
    } else {
      throw TypeError('Length must be a number');
    }
  }

  get students() {
    return this._students;
  }

  set students(val) {
    if (Array.isArray(val)) {
      this._students = val;
    } else {
      throw TypeError('Students must be an array of string');
    }
  }
}
