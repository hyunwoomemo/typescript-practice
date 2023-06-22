import { getFullName, User } from "./user";

const hyun: User = {
  lastName: "Lee",
  firstName: "Hyunwoo",
  age: 30,
  isValid: true,
};

const fullName = getFullName(hyun);

console.log(fullName);
console.log(hyun.isValid);
