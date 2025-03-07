interface DirectorInterface {
  workFromHome(): string,
  getCoffeeBreak(): string,
  workDirectorTasks(): string,
};

interface TeacherInterface {
  workFromHome(): string,
  getCoffeeBreak(): string,
  workTeacherTasks(): string,
}

class Director implements DirectorInterface {
  workFromHome(): string {
    return `Working from home`;
  }
  getCoffeeBreak(): string {
    return `Getting a coffee break`;
  }
  workDirectorTasks(): string {
    return `Getting to director tasks`;
  }
}

class Teacher implements TeacherInterface {
    workFromHome(): string {
    return `Cannot work from home`;
  }
  getCoffeeBreak(): string {
    return `Cannot have a break`;
  }
  workTeacherTasks(): string {
    return `Getting to work`;
  }
}

const createEmployee = (salary: number | string): Teacher | Director => {
  if (typeof salary === 'number' && salary < 500) {
    return new Teacher();
  }
  return new Director();
};

// Example

/*
console.log(createEmployee(200));
// Teacher
console.log(createEmployee(1000));
// Director
console.log(createEmployee('$500'));
// Director
*/

const isDirector = (employee: Director | Teacher): employee is Director => employee instanceof Director;

const executeWork = (employee: Director | Teacher): string => {
    if (isDirector(employee)) {
        return employee.workDirectorTasks();
    }
    return employee.workTeacherTasks();
}

// Example 
// console.log(executeWork(createEmployee(200)));
// console.log(executeWork(createEmployee(1000)));

type Subject = 'Math' | 'History';

const teachClass = (todayClass: Subject): string => {
  if (todayClass === 'Math') {
    return 'Teaching Math';
  }
  return 'Teaching History';
}

// Example
console.log(teachClass('Math'));
console.log(teachClass('History'));
