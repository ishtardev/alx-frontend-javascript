interface Teacher {
  readonly firstName: string,
  fullTimeEmployee: boolean,
  readonly lastName: string,
  yearsOfExperience?: number
  location: string,
  contract: boolean,
  [key: string]: any
}

const teacher3: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false,
};

console.log(teacher3);

interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

const printTeacher: printTeacherFunction = (firstName: string, lastName: string): string => {
  return `${firstName}. ${lastName}`;
}

console.log(printTeacher('John', 'Doe'));

interface StudentConstructor {
  new (firstName: string, lastName: string): StudentInterface;
}

interface StudentInterface {
  firstName: string;
  lastName: string;
  workOnHomework(): string;
  displayName(): string;
}

class StudentClass implements StudentInterface {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return 'Currently working';
  }

  displayName(): string {
    return this.firstName;
  }
}

const student1 = new StudentClass('Jane', 'Smith');
console.log(student1.displayName());  // Output: Jane
console.log(student1.workOnHomework());  // Output: Currently working