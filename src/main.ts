class UserA {
  first: string = ""; // 초기값 설정 가능
  last: string;
  age: number;

  constructor(first: string, last: string, age: number) {
    this.first = first;
    this.last = last;
    this.age = age;
  }

  getAge() {
    return `${this.first} ${this.last} is ${this.age}`;
  }
}

class UserB extends UserA {
  getAge() {
    return `${this.first} ${this.last} is ${this.age}`;
  }
}
