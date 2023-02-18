class Person {
  private _type: 'Student' | 'Employee' | 'Professor' | ''
  constructor(private firstName: string, private lastName: string, private age: number) {
    this._type= ''
  }

  authorized() {
    if(!this._type) {
      throw new Error('Type is not defined')
    }

    if (this._type === 'Student') {
      return this.academicId === id
    }
    if (this._type === 'Employee') {
      return this.employeeId === id
    }
    if (this._type === 'Professor') {
      return this.professorId === id
    }
  }

  get type() {
    return this._type;
  }

  set type(value) {
    this._type = value
  }
}