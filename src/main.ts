class User<P> {
  constructor(public payload: P) {}

  getPayload() {
    return this.payload;
  }
}

interface UserAType {
  name: string;
  age: number;
  isValid: boolean;
}
interface UserBType {
  name: string;
  age: number;
  emails: string[];
}

const hyun = new User<UserAType>({
  name: "Hyun",
  age: 85,
  isValid: true,
});

const neo = new User<UserBType>({
  name: "Neo",
  age: 102,
  emails: ["neo@gmail.com"],
});
