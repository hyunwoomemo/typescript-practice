interface UserA {
  name: string;
  age: number;
}

interface UserB extends UserA {
  isValid: boolean;
}

const hyun: UserA = {
  name: "Hyun",
  age: 85,
  isValid: true,
};

const neo: UserB = {
  name: "Neo",
  age: 102,
  isValid: true,
};
