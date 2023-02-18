interface IPerson {
  authorize: (id: string) => boolean
}

class Person2 {
  private _type: 'Student' | 'Employee' | 'Professor' | ''
  constructor(private firstName: string, private lastName: string, private age: number) {
    this._type= ''
  }

  get type() {
    return this._type;
  }

  set type(value) {
    this._type = value
  }
}

class Student implements IPerson {
  constructor(private academicId: string, private person: Person2){}

  authorize(id: string) {
    this.person.type = 'Student'
    console.log('=== person', this.person)
    return this.academicId === id
  };
}

class Employee implements IPerson {
  constructor(private employeeId: string, private person: Person2){}

  authorize(id: string) {
    this.person.type = 'Employee'
    console.log('=== person', this.person)
    return this.employeeId === id
  };
}

class Professor {
  constructor(private professorId: string, private person: Person2){}

  authorize(id: string) {
    this.person.type = 'Professor'
    console.log('=== person', this.person)
    return this.professorId === id
  };
}

const joe = new Person2('joe', 'blas', 45)
const joeStudent = new Student('123', joe)
const isjoeStudentAuthorized = joeStudent.authorize('234')
console.log('joeStudent', joeStudent)
console.log('is authorized', isjoeStudentAuthorized)

const joeEmployee = new Employee('123', joe)
const isjoeEmployeeAuthorized = joeEmployee.authorize('123')
console.log('is authorized', isjoeEmployeeAuthorized)

const joeProfessor = new Professor('123', joe)
const isjoeProfessorAuthorized = joeProfessor.authorize('123')
console.log('is authorized', isjoeProfessorAuthorized)