const username: string = 'spop';

const sum = (a: number, b: number) => {
  return a+b;
}

let c = sum(1, 2)


class Person{
  private age: number;
  lastName: string;

  constructor(age: number, lastName: string){
    this.age = age;
    this.lastName = lastName;
  }
}

const nico = new Person(34, 'Ontiveros');
