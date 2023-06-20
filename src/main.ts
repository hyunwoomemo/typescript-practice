// 배열
interface Fruits {
  [item: number]: string;
}

const fruits: Fruits = ["Apple", "Banana", "Cherry"];
console.log(fruits);

// 객체
interface User {
  [key: string]: unknown;
  name: string;
  age: number;
}

const hyun: User = {
  name: "Hyun",
  age: 30,
};

hyun["isValid"] = true;
hyun["emails"] = ["archihw94@gmail.com", "test@gmail.com"];

console.log(hyun);
