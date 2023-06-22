class UserA {
  constructor(public first: string = "", public last: string = "", public age: number = 0) {}

  getAge() {
    return `${this.first} ${this.last} is ${this.age}`;
  }
}

class UserB extends UserA {
  getAge() {
    return `${this.first} ${this.last} is ${this.age}`;
  }
}

class UserC extends UserB {
  getAge() {
    return `${this.first} ${this.last} is ${this.age}`;
  }
}

const neo = new UserA("Neo", "Anderson", 102);
console.log(neo.first);
console.log(neo.last); // last 속성은 protecte로 정의되어 있어서 내부에서만 사용 가능
console.log(neo.age); // age 속성은 private 속성으로 내부에서만 사용 가능
