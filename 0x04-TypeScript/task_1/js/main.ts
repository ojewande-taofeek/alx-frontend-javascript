interface Teacher {
    readonly firstName: string,
    readonly lastName: string,
    fullTimeEmployee: boolean,
    yearsOfExperience?: number,
    location: string,
    [index: string]: boolean | number | string,
};

// Example 
const teacher3: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false,
};

console.log(teacher3);

interface Directors extends Teacher {
    numberOfReports: number,
};

// Example 
const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};
console.log(director1);


const printTeacher = (firstName: string, lastName: string): string => {
  return `${firstName[0]}. ${lastName}`
}

// Example
console.log(printTeacher("John", "Doe"));

interface StudentInterface {
  firstName: string,
  lastName: string,
  workOnHomework(): string,
  displayName(): string,
};

class StudentClass implements StudentInterface {
    firstName: string;
    lastName: string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

   workOnHomework(): string {
        return `Currently working`
    };
    displayName(): string {
        return this.firstName;
    };
}



