interface Payload {
  [key: string]: unknown;
}

function logValues(payload: Payload) {
  for (const key in payload) {
    console.log(payload[key]);
  }
}

interface User {
  [key: string]: unknown;
  name: string;
  age: number;
  isValid: boolean;
}

const hyun: User = {
  name: "Hyun",
  age: 30,
  isValid: true,
};

logValues(hyun);
